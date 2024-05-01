import api from "@/api/api";
import { CommonError, CommonSuccess } from "@/helpers/CommonMessage";
import useFormValidation from "@/hooks/useValidation";
import { createTodoApi } from "@/services/todoServices";
import DialogeModal from "@/ui/DialogeModalC";
import FormTextField from "@/ui/FormTextField";
import LoadingButton from "@/ui/LoadingButton";
import { Button, Stack } from "@mui/material";
import { useState } from "react";

function AddTodo({ open, setOpen, afterAdd }: any) {
  const [data, setData] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const changeFields = (e: any) => {
    const { name, value } = e.target;
    handleChange(e);
    setData((prev: any) => ({ ...prev, [name]: value }));
  };
  const submitData = (e: any) => {
    e.preventDefault();
    setLoading(true);
    handleSubmit(e, handleCreateTodo);
  };
  const handleCreateTodo = async (err: any) => {
    if (Object.keys(err).length) {
      return;
    }
    debugger;
    const response: any = await createTodoApi(data);
    if (response.status == 201) {
      afterAdd();
      setOpen(false);
      CommonSuccess("Todod Added successfully");
    }
    CommonError("Something went wrong");
  };
  const { values, errors, handleChange, handleSubmit }: any = useFormValidation(
    data,
    ["description"]
  );
  return (
    <DialogeModal
      title={"Add Todo"}
      size={"sm"}
      open={open}
      handleClose={() => {
        setOpen(false);
      }}
    >
      <div style={{ padding: 10 }}>
        <FormTextField
          label={"Title Name"}
          error={errors?.title}
          onChange={changeFields}
          name={"title"}
          value={data.title}
        />
        <FormTextField
          label={"Date"}
          type="date"
          error={errors?.date}
          onChange={changeFields}
          name={"date"}
          value={data.date}
        />
        <FormTextField
          label={"Description"}
          onChange={changeFields}
          name={"description"}
          placeholder={"Start typing Description here..."}
          value={data.description}
          error={errors?.description}
        />

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

export default AddTodo;
