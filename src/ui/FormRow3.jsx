import PropTypes from "prop-types";
import { FormRow, Label } from "./FormRow2";

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
