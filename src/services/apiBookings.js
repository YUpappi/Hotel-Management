import { PAGE_SIZE } from "../ui/Pagination";
import { getToday, subtractDates } from "../utils/helpers";
import supabase from "./supabase";

// export async function getBookings() {
//   const { data, error } = await supabase
//     .from("bookings")
//     .select(
//       "id, created_at, numNights, numGuests, startDate, endDate, cabins(name),guests(fullName,email)"
//     );
//   if (error) {
//     console.error(error);
//     console.log("Error-message:", error.message);
//     throw new Error("Bookings could not get loaded");
//   }
//   return data;
// }

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase.from("bookings").select(
    `
      id,
      created_at,
      numNigths,
      numGuests,
      startDate,
      endDate,
      cabinId,
      guestId,
      status,
      totalPrice,
      Cabins(name),
      guest(fullName, email)
    `,
    { count: "exact" },
  );
  // APPLY FILTER IF EXISTS
  if (filter) {
    query = query.eq(filter.field, filter.value);
  }

  // APPLY SORT IF EXISTS
  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }
  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    console.log("Error-message:", error.message);
    throw new Error("Bookings could not get loaded");
  }

  return { data, count };
}

// export const createBooking = async (newBooking) => {
//   const { data, error } = await supabase
//     .from("bookings")
//     .insert([newBooking])
//     .select()
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Booking could not be created");
//   }

//   return data;
// };

export const createBooking = async (formData) => {
  // 1️⃣ Check if guest already exists by email
  const { data: existingGuest, error: fetchError } = await supabase
    .from("guest")
    .select("id")
    .eq("email", formData.email)
    .maybeSingle();

  if (fetchError) throw new Error(fetchError.message);

  let guestId;
  //  If guest exists, use existing guestId
  if (existingGuest) {
    guestId = existingGuest.id;
  } else {
    //  Otherwise create new guest
    const { data: newGuest, error: guestError } = await supabase
      .from("guest")
      .insert([
        {
          fullName: formData.fullName,
          email: formData.email,
          nationality: formData.nationality,
          nationalID: formData.nationalID,
          countryFlag: null,
        },
      ])
      .select()
      .single();

    if (guestError) throw new Error(guestError.message);

    guestId = newGuest.id;
  }

  // 2️ Get cabin price from DB
  const { data: cabin, error: cabinError } = await supabase
    .from("Cabins")
    .select("regularPrice")
    .eq("id", formData.cabinId)
    .single();

  if (cabinError) throw new Error(cabinError.message);

  // Calculate number of nights
  const numNigths = subtractDates(formData.endDate, formData.startDate);

  if (numNigths <= 0)
    throw new Error("Checkout date must be after checkin date");

  //  Calculate total price
  const totalPrice = numNigths * cabin.regularPrice;

  // 5️ Insert booking
  const { data, error } = await supabase
    .from("bookings")
    .insert([
      {
        startDate: formData.startDate,
        endDate: formData.endDate,
        numNigths,
        numGuests: formData.numGuests,
        status: "unconfirmed",
        hasBreakfast: false,
        isPaid: false,
        extrasPrice: 0,
        totalPrice: totalPrice,
        cabinPrice: totalPrice,
        observations: formData.observations || null,
        cabinId: formData.cabinId,
        guestId: guestId,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, Cabins(*), guest(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guest(fullName)")
    .gte("created_at", date);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const dateStr = `${yyyy}-${mm}-${dd}`;

  const { data, error } = await supabase
    .from("bookings")
    .select("*, guest(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${dateStr}),and(status.eq.checked-in,endDate.eq.${dateStr})`,
    )
    .order("created_at");

  if (error) throw new Error("Bookings could not get loaded");
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
