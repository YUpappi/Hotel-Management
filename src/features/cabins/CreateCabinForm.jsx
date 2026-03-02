import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import FormRow2 from "../../ui/FormRow2";
import PropTypes from "prop-types";
import useCreateCabin from "./useCreateCabin";
import useEditCabins from "./useEditCabins";

export const FormRow = styled.div`
  display: ${(props) => (props.type === "vertical" ? "flex" : "grid")};

  ${(props) =>
    props.type === "vertical"
      ? css`
          flex-direction: column;

          gap: 1.2rem;
        `
      : css`
          align-items: center;
          grid-template-columns: 24rem 1fr;
          gap: 2.4rem;

          @media (max-width: 900px) {
            grid-template-columns: 18rem 1fr;
          }

          @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }
        `}

  padding: 1.2rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;

    @media (max-width: 600px) {
      justify-content: stretch;
      flex-direction: column;
    }
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

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

  // Handle form submission
  const onFormSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editCabins(
        { newCabin: { ...data, image: image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createCabins(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  };
  const onError = (errors) => {
    console.error("Form errors:", errors);
  };
  return (
    <Form
      onSubmit={handleSubmit(onFormSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow2 label=" Cabin name" error={errors?.name?.message}>
        <input
          type="text"
          disabled={isWorking}
          id="name"
          {...register("name", {
            required: "Cabin name is required",
          })}
        />
      </FormRow2>
      <FormRow2 label=" Maximum capacity" error={errors?.maxCapacity?.message}>
        <input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Capacity must be at least 1",
            min: {
              value: 1,
              message: "Capacity must be at least 1",
            },
          })}
        />
      </FormRow2>
      <FormRow2 label="Regular Price" error={errors?.regularPrice?.message}>
        <input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "regular price must be at least 1",
            },
          })}
        />
      </FormRow2>
      <FormRow2 label="Discount" error={errors?.discount?.message}>
        <input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) => {
              const regularPrice = getValues("regularPrice");
              return (
                Number(value) <= Number(regularPrice) ||
                "Discount must be less than regular price"
              );
            },
          })}
        />
      </FormRow2>
      <FormRow2
        label=" Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="text"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow2>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        {isEditSession ? (
          <Button variation="primary" disabled={isWorking}>
            {isEditing ? "Editng..." : "Edit cabin"}
          </Button>
        ) : (
          <Button variation="primary" disabled={isWorking}>
            {isCreating ? " Adding..." : "Add cabin"}
          </Button>
        )}
      </FormRow>
    </Form>
  );
}

CreateCabinForm.propTypes = {
  editCabin: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    maxCapacity: PropTypes.number,
    regularPrice: PropTypes.number,
    discount: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
  onCloseModal: PropTypes.func,
};

export default CreateCabinForm;
