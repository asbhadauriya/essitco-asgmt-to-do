
import {  Button, Stack } from "@mui/material";
import LoadingButton from "../../../ui/LoadingButton";
import FormTextField from "../../../ui/CommonElements/FormTextField";
import DialogeModal from "../../../ui/DialogeModal";

function AddDesignation({
  open,
  setOpen,
  data,
  submitData,
  changeFields,
  errors,
  loading,
}: any) {
  return (
    <DialogeModal
      title={"Add Designation"}
      size={"sm"}
      open={open}
      handleClose={() => {
        setOpen(false);
      }}
    >
      <div style={{ padding: 10 }}>
        <FormTextField
          label={"Designation Name"}
          error={errors?.designationName}
          onChange={changeFields}
          name={"designationName"}
          value={data.designationName}
        />
<FormTextField
          label={"Description"}
          onChange={changeFields}
          name={"mailAlias"}
          placeholder={"Start typing Description here..."}
          value={data.mailAlias}
          error={errors?.mailAlias}
        />
        {/* <FormTextField
          label={"Mail alias"}
          onChange={changeFields}
          name={"mailAlias"}
          placeholder={"@mabzone.com"}
          value={data.mailAlias}
          error={errors?.mailAlias}
        /> */}
        <Stack direction="row" spacing={2} justifyContent={"center"}>
          <LoadingButton
            loading={loading}
            variant="contained"
            color="primary"
            onClick={submitData}
          >
            Submit
          </LoadingButton>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </Stack>
      </div>
    </DialogeModal>
  );
}

export default AddDesignation;
