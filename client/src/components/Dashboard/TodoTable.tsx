import { Edit } from '@mui/icons-material';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import AddTodo from './AddTodo';
import { CommonError, CommonSuccess } from '@/helpers/CommonMessage';

function TodoTable({todos,afterAdd}:any) {
    const [currSelect, setCurrSelect] = useState<any>();
    const [open, setOpen] = useState<Boolean>(false);

    const handleClose=(val:Boolean)=>{
        setOpen(val)
        if(!val)
        setCurrSelect({})
    }
    const handleSubmit=(response:any)=>{
        if(response.status==200){
            CommonSuccess('Todo Updated Successfully')
            afterAdd()
            setOpen(false)
        }
        else{
            CommonError('Something went wrong')
        }

    }
  return (
    <div>
                  <TableContainer component={Paper}>
      <Table  stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>

           <TableCell align="center">S. No.</TableCell>
           <TableCell align="center">Title</TableCell>
           <TableCell align="center">Status</TableCell>
           <TableCell align="center">Description</TableCell>
           <TableCell align="center">Edit</TableCell>

            </TableRow>


</TableHead>
<TableBody>
        {todos?.map((item:any,i:number)=>{
            return(
            <React.Fragment key={i}>
            <TableRow>

    <TableCell align="center">{i+1}</TableCell>

           <TableCell align="center">{item?.title}</TableCell>
           <TableCell align="center">{item?.completed?'completed':'pending'}</TableCell>
           <TableCell align="center">{item?.description}</TableCell>
           <TableCell align="center"><IconButton onClick={()=>{setCurrSelect(item);setOpen(true)}}><Edit/></IconButton></TableCell>
 
 </TableRow>
                </React.Fragment>)
})}
</TableBody>
</Table>
</TableContainer>
{open ? (
        <AddTodo
          open={open}
          setOpen={(val: Boolean) => {
            handleClose(val);
          }}
          title={'Edit Todo'}
          todoData={currSelect}
          afterAdd={handleSubmit}
        />
      ) : null}
    </div>
  )
}

export default TodoTable