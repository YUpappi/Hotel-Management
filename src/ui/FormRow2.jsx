import styled from "styled-components";
// import { Error, FormRow, Label } from "../features/cabins/CreateCabinForm";
import PropTypes from "prop-types";

export const FormRow = styled.div`
  display: ${(props) => (props.type === "vertical" ? "flex" : "grid")};

  ${(props) =>
    props.type === "vertical"
      ? `flex-direction: column; gap: 1.2rem;`
      : `align-items: center; grid-template-columns: 24rem 1fr; gap: 2.4rem;`}

  @media (max-width: 900px) {
    grid-template-columns: 18rem 1fr;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow2({ label, error, id, children }) {
  return (
    <FormRow>
      <Label htmlFor={id}>{label}</Label>
      <div className="flex flex-col gap-[0.8rem]">
        {children}
        {error && <Error>{error}</Error>}
      </div>
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
