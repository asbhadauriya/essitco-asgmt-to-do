import api from "@/api/api";
import DashboardC from "@/components/Dashboard/DashboardC";
import TodoCard from "@/components/Dashboard/Todlist";
import { Grid } from "@mui/material";

function Dashbaord() {
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
      <DashboardC/>
    </main>
  )
}

export default Dashbaord