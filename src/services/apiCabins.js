import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not get loaded");
  }

  return data;
}

// Create or Edit cabin
export const createCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("Cabins");

  // CREATE or UPDATE - set up query BEFORE executing
  if (!id) {
    // CREATE
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    // EDIT
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  // Execute the query
  const { data, error } = await query.select().single();
  if (hasImagePath) return data;

  if (error) {
    throw new Error(`Cabin could not be ${id ? "updated" : "created"}`);
  }

  // If image already exists in Supabase, skip upload
  if (hasImagePath) return data;

  // Upload new image to Supabase Storage
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    // Rollback: delete the cabin if image upload fails
    await supabase.from("Cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Image could not be uploaded and cabin was not saved");
  }

  return data;
};

// export const createCabin = async (newCabin, id) => {
//   //https://gcuzcrytjrxbuwwhqnfg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
//   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
//   // const hasImagePath =
//   //   typeof newCabin?.image === "string" &&
//   //   newCabin.image.startsWith(supabaseUrl);

//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );

//   const imagePath = hasImagePath
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   let query = supabase.from("Cabins");
//   // CRREATE CABINS
//   if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

//   //EDIT cABINS
//   if (hasImagePath) return data;
//   if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
//   // Execute the query
//   const { data, error } = await query.select().single();
//   //
//   if (error) {
//     console.error(error);
//     throw new Error("Cabin could not be created");
//   }
//   // Upload image to Supabase Storage
//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);

//   if (storageError) {
//     await supabase.from("Cabins").delete().eq("id", data.id);
//     console.error(storageError);
//     throw new Error("Image could not be uploaded");
//   }
//   return data;
// };

// Delete cabin by ID

export async function deleteCabin(id) {
  const { error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
