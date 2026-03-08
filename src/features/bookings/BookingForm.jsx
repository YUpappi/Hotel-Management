import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUploadBookings from "./useUploadBookings";
import useCabins from "../cabins/useCabins";

function BookingForm() {
  const { createBooking, isPending } = useUploadBookings();
  const { cabins } = useCabins();
  // const [searchParams] = useSearchParams();
  const { cabinId } = useParams();

  // const cabin = cabins?.find((cab) => cab.id === parseInt(cabinId));

  const cabinOptions = cabins?.map((cabin) => (
    <option
      key={cabin.id}
      value={cabin.id}
      className="bg-gray-100 text-gray-900"
    >
      {cabin.name}
    </option>
  ));

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm();

  const selectedCabinId = watch("cabinId");

  // Set initial cabin ID from query params
  useEffect(() => {
    if (cabinId) {
      setValue("cabinId", Number(cabinId));
    }
  }, [cabinId, setValue]);

  // Auto-set number of guests to cabin's max capacity when cabin is selected
  useEffect(() => {
    if (selectedCabinId) {
      const selectedCabin = cabins?.find(
        (cabin) => cabin.id === parseInt(selectedCabinId),
      );
      if (selectedCabin) {
        setValue("numGuests", selectedCabin.maxCapacity);
      }
    }
  }, [selectedCabinId, cabins, setValue]);

  const onBookingSubmit = (data) => {
    createBooking(data);
    reset();
  };

  return (
    <section className="w-full flex justify-center py-20">
      <div className=" w-[92%] md:w-[80%]  bg-gray-100 border border-gray-300 rounded-3xl p-10 shadow-2xl text-gray-900">
        <form
          className="grid md:grid-cols-2 gap-8 "
          onSubmit={handleSubmit(onBookingSubmit)}
        >
          {/* Check-in Date */}
          <div className="flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">Check-in Date</label>
            <input
              type="date"
              {...register("startDate", {
                required: "Check-in date is required",
              })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            />
            {errors?.startDate && (
              <p className="text-red-600 text-xl">{errors.startDate.message}</p>
            )}
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">
              Check-out Date
            </label>
            <input
              type="date"
              {...register("endDate", {
                required: "Check-out date is required",
              })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            />
            {errors?.endDate && (
              <p className="text-red-600 text-xl">{errors.endDate.message}</p>
            )}
          </div>

          {/* Room Type */}
          <div className="flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">Room Type</label>
            <select
              {...register("cabinId", { required: "Room type is required" })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
              value="select your room type"
            >
              {/* <option value=" Select your room type"></option> */}
              {cabinOptions}
            </select>
            {errors?.cabinId && (
              <p className="text-red-600 text-xl">{errors.cabinId.message}</p>
            )}
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">
              Number of Guests Per room
            </label>
            <input
              {...register("numGuests", {
                required: "Number of guests is required",
                min: { value: 1, message: "At least one guest is required" },
              })}
              type="number"
              placeholder="Enter number of guests"
              disabled={!selectedCabinId}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 disabled:opacity-60 disabled:cursor-not-allowed"
            />
            {!selectedCabinId && (
              <p className="text-yellow-600 text-lg">
                Select a room type first
              </p>
            )}
            {errors?.numGuests && (
              <p className="text-red-600 text-xl">{errors.numGuests.message}</p>
            )}
          </div>

          {/* Full Name (Full width) */}
          <div className=" flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">Full Name</label>
            <input
              {...register("fullName", {
                required: "Full name is required",
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            />
            {errors?.fullName && (
              <p className="text-red-600 text-xl">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">Email Address</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              placeholder="your@email.com"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            />
            {errors?.email && (
              <p className="text-red-600 text-xl">{errors.email.message}</p>
            )}
          </div>

          {/* Nationality */}
          <div className="flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">Nationality</label>
            <input
              {...register("nationality", {
                required: "Nationality is required",
              })}
              type="text"
              placeholder="e.g. Nigerian"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            />
            {errors?.nationality && (
              <p className="text-red-600 text-xl">
                {errors.nationality.message}
              </p>
            )}
          </div>

          {/* National ID */}
          <div className="flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">
              National ID / Passport
            </label>
            <input
              {...register("nationalID", {
                required: "National ID is required",
              })}
              type="text"
              placeholder="Enter ID number"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            />
            {errors?.nationalID && (
              <p className="text-red-600 text-xl">
                {errors.nationalID.message}
              </p>
            )}
          </div>

          {/* Observations (Full width) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[1.5rem] text-gray-900">
              Special Requests / Notes
            </label>
            <textarea
              {...register("observations")}
              rows="3"
              placeholder="Any special requests..."
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-6">
            <button
              disabled={isPending}
              type="submit"
              className={`w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 rounded-full transition duration-300 shadow-lg ${isPending ? "opacity-50" : ""}`}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
