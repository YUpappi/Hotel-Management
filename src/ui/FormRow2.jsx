import styled from "styled-components";
import { Error, FormRow, Label } from "../features/cabins/CreateCabinForm";
import PropTypes from "prop-types";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

function FormRow2({ label, error, id, children }) {
  return (
    <FormRow>
      <Label htmlFor={id}>{label}</Label>
      <StyledRow>
        {children}
        {error && <Error>{error}</Error>}
      </StyledRow>
    </FormRow>
  );
}

export default FormRow2;

FormRow2.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};
