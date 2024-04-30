
import useFormValidation from "@/hooks/useValidation";
import DialogeModal from "@/ui/DialogeModalC";
import FormTextField from "@/ui/FormTextField";
import LoadingButton from "@/ui/LoadingButton";
import {  Button, Stack } from "@mui/material";
import { useState } from "react";

function AddTodo({
  open,
  setOpen,
  
}: any) {
  const[data,setData]=useState({
    title:'',
    description:''
})
const[loading,setLoading]=useState(false)
const changeFields=(e:any)=>{
    const{name,value}=e.target;
    handleChange(e)
    setData((prev:any)=>({...prev,[name]:value}))
}
const submitData=(e:any)=>{
  e.preventDefault();
  setLoading(true)
  handleSubmit(e,handleCreateTodo)
}
const handleCreateTodo =async(err:any)=>{
  console.log(err);
  

}
const { values, errors, handleChange, handleSubmit }:any = useFormValidation(data);
;

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
