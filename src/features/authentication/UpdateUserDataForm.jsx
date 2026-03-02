import { useState } from "react";
import { FormRow3 } from "../../ui/FormRow3";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";

import useUpdateUser from "./useUpdateUser";
import useUser from "./useUser";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

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

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;
  padding-bottom: 2rem;
`;

function UpdateUserDataForm({ onCloseModal }) {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
          onCloseModal?.();
        },
      },
    );
  }

  function handleReset() {
    setFullName(currentFullName);
    setAvatar(null);
    onCloseModal?.();
  }

  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <Row type="vertical">
        <div>
          <Heading as="h3">Update user data</Heading>
        </div>
        <Form onSubmit={handleSubmit} type="modal">
          <FormRow3 label="Email address">
            <Input value={email} disabled />
          </FormRow3>
          <FormRow3 label="Full name">
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="fullName"
              disabled={isUpdating}
            />
          </FormRow3>
          <FormRow3 label="Avatar image">
            <FileInput
              id="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              disabled={isUpdating}
            />
          </FormRow3>
          <StyledUser>
            <Button
              type="reset"
              variation="secondary"
              onClick={handleReset}
              disabled={isUpdating}
            >
              Cancel
            </Button>
            <Button disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update account"}
            </Button>
          </StyledUser>
        </Form>
      </Row>
    </>
  );
}

export default UpdateUserDataForm;

UpdateUserDataForm.propTypes = {
  onCloseModal: PropTypes.func,
};
