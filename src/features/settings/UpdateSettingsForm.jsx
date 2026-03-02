import Form from "../../ui/Form";
import FormRow2 from "../../ui/FormRow2";
import Spinner from "../../ui/Spinner";
import useSettings from "./useSettings";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      MaxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleSettingUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow2 label="Minimum nights/booking">
        <input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleSettingUpdate(e, "minBookingLength")}
        />
      </FormRow2>
      <FormRow2 label="Maximum nights/booking">
        <input
          type="number"
          id="max-nights"
          defaultValue={MaxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleSettingUpdate(e, "MaxBookingLength")}
        />
      </FormRow2>
      <FormRow2 label="Maximum guests/booking">
        <input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleSettingUpdate(e, "maxGuestPerBooking")}
        />
      </FormRow2>
      <FormRow2 label="Breakfast price">
        <input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleSettingUpdate(e, "breakfastPrice")}
        />
      </FormRow2>
    </Form>
  );
}

export default UpdateSettingsForm;
