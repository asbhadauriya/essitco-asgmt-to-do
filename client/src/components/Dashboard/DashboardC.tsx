'use client'
import { useCallback, useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import { fetchAllTodoApi } from '@/services/todoServices'
import DragDropComponent from './TodoDragDrop'
import TodoChart from './BarTodo'
const completed=[
  {
    id: 1,
    task: "Walk the walk"
  },
  {
    id: 2,
    task: "Talk the talk"
  },
  {
    id: 3,
    task: "Jump the jump"
  
}]
const pending=[
  {
    id: 4,
    task: "Walkzx the walk"
  },
  {
    id: 5,
    task: "Talk the talk"
  },
  {
    id: 6,
    task: "Jump the jump"
  }
]
function DashboardC() {
    const[open,setOpen]=useState<Boolean>(false)
    const[Todos,setTodos]=useState({
      completed:completed,
      pending:pending
    })
    useEffect(()=>{
      getAllTodo()
    },[])
    const getAllTodo=async()=>{
      const response=await fetchAllTodoApi()
    }
    
    const handleAfterDrop = useCallback((todo:any, source:string, destination:string) => {
      setTodos(prevTodos => {
        const updatedTodos = { ...prevTodos };
  
        if (source === 'pending' && destination === 'completed') {
          updatedTodos.pending = updatedTodos.pending.filter(item => item.id !== todo.id);
          updatedTodos.completed = [...updatedTodos.completed, todo];
        }
  
        if (source === 'completed' && destination === 'pending') {
          updatedTodos.completed = updatedTodos.completed.filter(item => item.id !== todo.id);
          updatedTodos.pending = [...updatedTodos.pending, todo];
        }
        
        return updatedTodos;
      });
    }, []);
    console.log(Todos);

  return (
    <div>
      <DragDropComponent pendingTodos={Todos.pending} completedTodos={Todos.completed} onAfterDrop={handleAfterDrop}/>
        <TodoChart todos={[]}/>
        {open?<AddTodo open={open} setOpen={(val:Boolean)=>{setOpen(val)}}/>:null}</div>
  )
}

export default DashboardC