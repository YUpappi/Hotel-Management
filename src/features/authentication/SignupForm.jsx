import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow2 from "../../ui/FormRow2";
import styled from "styled-components";
import useSignup from "./useSignup";
import { useNavigate } from "react-router-dom";

// Email regex: /\S+@\S+\.\S+/

const Input = styled.input`
  padding: 1rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  font-size: 1.6rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

function SignupForm() {
  const navigate = useNavigate();
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, password, email }) {
    signup(
      { fullName, password, email },
      {
        onSettled: () => {
          reset();
          navigate("/dashboard");
        },
      },
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow2
        label="Full name"
        error={errors?.fullName?.message}
        id="fullName"
        disabled={isPending}
      >
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
          disabled={isPending}
        />
      </FormRow2>

      <FormRow2 label="Email address" error={errors?.email?.message} id="email">
        <Input
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow2>

      <FormRow2
        label="Password (min 8 characters)"
        error={errors?.password?.message}
        id="password"
      >
        <Input
          type="password"
          id="password"
          disabled={isPending}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "password must be at least 8 character",
            },
          })}
        />
      </FormRow2>

      <FormRow2
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
        id="passwordConfirm"
        disabled={isPending}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password must match",
          })}
        />
      </FormRow2>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button variation="primary" disabled={isPending}>
          {isPending ? "Creating user..." : "Create new user"}
        </Button>
      </FormRow2>
    </Form>
  );
}

export default SignupForm;
