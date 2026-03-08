import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import PropTypes from "prop-types";
import useCreateCabin from "./useCreateCabin";
import useEditCabins from "./useEditCabins";

function CreateCabinForm({ editCabin = {}, onCloseModal }) {
  const { isCreating, createCabins } = useCreateCabin();
  const { isEditing, editCabins } = useEditCabins();

  const { id: editId, ...editFields } = editCabin;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editFields : {},
  });

  const { errors } = formState;
  const isWorking = isCreating || isEditing;

  const onFormSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabins(
        { newCabin: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createCabins(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className={`w-full text-sm overflow-hidden ${
        onCloseModal
          ? "max-w-5xl mx-auto"
          : "bg-white border border-gray-200 rounded-md p-10"
      }`}
    >
      {/* Cabin Name */}
      <div className="grid md:grid-cols-[24rem_1fr] gap-6 py-4 border-b border-gray-200">
        <label className="font-medium">Cabin name</label>
        <div>
          <input
            type="text"
            disabled={isWorking}
            className="w-full border rounded-md px-4 py-2"
            {...register("name", { required: "Cabin name is required" })}
          />
          {errors?.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
      </div>

      {/* Max Capacity */}
      <div className="grid md:grid-cols-[24rem_1fr] gap-6 py-4 border-b border-gray-200">
        <label className="font-medium">Maximum capacity</label>
        <div>
          <input
            type="number"
            disabled={isWorking}
            className="w-full border rounded-md px-4 py-2"
            {...register("maxCapacity", {
              required: "Capacity must be at least 1",
              min: { value: 1, message: "Capacity must be at least 1" },
            })}
          />
          {errors?.maxCapacity && (
            <p className="text-red-600 text-sm mt-1">
              {errors.maxCapacity.message}
            </p>
          )}
        </div>
      </div>

      {/* Regular Price */}
      <div className="grid md:grid-cols-[24rem_1fr] gap-6 py-4 border-b border-gray-200">
        <label className="font-medium">Regular Price</label>
        <div>
          <input
            type="number"
            disabled={isWorking}
            className="w-full border rounded-md px-4 py-2"
            {...register("regularPrice", {
              required: "This field is required",
              min: { value: 1, message: "Regular price must be at least 1" },
            })}
          />
          {errors?.regularPrice && (
            <p className="text-red-600 text-sm mt-1">
              {errors.regularPrice.message}
            </p>
          )}
        </div>
      </div>

      {/* Discount */}
      <div className="grid md:grid-cols-[24rem_1fr] gap-6 py-4 border-b border-gray-200">
        <label className="font-medium">Discount</label>
        <div>
          <input
            type="number"
            disabled={isWorking}
            defaultValue={0}
            className="w-full border rounded-md px-4 py-2"
            {...register("discount", {
              required: "This field is required",
              validate: (value) =>
                Number(value) <= Number(getValues("regularPrice")) ||
                "Discount must be less than regular price",
            })}
          />
          {errors?.discount && (
            <p className="text-red-600 text-sm mt-1">
              {errors.discount.message}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="grid md:grid-cols-[24rem_1fr] gap-6 py-4 border-b border-gray-200">
        <label className="font-medium">Description for website</label>
        <div>
          <Textarea
            disabled={isWorking}
            className="w-full border rounded-md px-4 py-2"
            {...register("description", {
              required: "This field is required",
            })}
          />
          {errors?.description && (
            <p className="text-red-600 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="grid md:grid-cols-[24rem_1fr] gap-6 py-4 border-b border-gray-200">
        <label className="font-medium">Cabin photo</label>
        <FileInput
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 py-6 flex-col sm:flex-row">
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>

        <Button variation="primary" disabled={isWorking}>
          {isEditSession
            ? isEditing
              ? "Editing..."
              : "Edit cabin"
            : isCreating
              ? "Adding..."
              : "Add cabin"}
        </Button>
      </div>
    </form>
  );
}

CreateCabinForm.propTypes = {
  editCabin: PropTypes.object,
  onCloseModal: PropTypes.func,
};

export default CreateCabinForm;
