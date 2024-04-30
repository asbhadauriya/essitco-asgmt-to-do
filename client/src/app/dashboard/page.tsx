import api from "@/api/api";
import TodoCard from "@/components/Dashboard/Todlist";
import { Grid } from "@mui/material";
const getAllTodoList=()=>{
  const response:any=api.get('todo/get-all')
  console.log(response.status);
  
}
function Dashbaord() {
  const todos=getAllTodoList()
  return (
    <main>
             <Grid container spacing={2}>
      <Grid lg={4} sm={6} xs={12}>
      <TodoCard sx={{ height: '100%' }} name={'Total'} value={10}/>

      </Grid>
      <Grid lg={4} sm={6} xs={12}>
      <TodoCard sx={{ height: '100%' }} name={'Pending'} value={10}/>
</Grid>
      <Grid lg={4} sm={6} xs={12}>
     <TodoCard sx={{ height: '100%' }} name={'Compoleted'} value={10}/>

      </Grid>
      </Grid>
    </main>
  )
}

export default Dashbaord