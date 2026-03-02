import { FormRow, Label } from "../features/cabins/CreateCabinForm";
import PropTypes from "prop-types";

export function FormRow3({ label, id, children }) {
  return (
    <FormRow type="vertical">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </FormRow>
  );
}

FormRow3.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};
