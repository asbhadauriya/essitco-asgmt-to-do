'use client'
import { useState } from 'react'
import AddTodo from './AddTodo'

function DashboardC() {
    const[open,setOpen]=useState<Boolean>(false)
  return (
    <div><AddTodo open={true} setOpen={(val:Boolean)=>{setOpen(val)}}/></div>
  )
}

export default DashboardC