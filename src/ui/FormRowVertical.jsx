import styled from "styled-components";

import PropTypes from "prop-types";
import { Error, Label } from "./FormRow2";

const FormRow3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem 0;
`;

function FormRowVertical({ label, error, id, children }) {
  return (
    <FormRow3>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </FormRow3>
  );
}

export default FormRowVertical;

FormRowVertical.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};
