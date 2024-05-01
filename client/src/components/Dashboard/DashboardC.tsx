"use client";
import { useCallback, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { fetchAllTodoApi } from "@/services/todoServices";
import DragDropComponent from "./TodoDragDrop";
import TodoChart from "./BarTodo";
import { Button, Grid, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoCard from "./Todlist";


function DashboardC() {
  const [open, setOpen] = useState<Boolean>(false);
  const [Todos, setTodos] = useState({
    allTodos: [],
    completed: [],
    pending: [],
  });
  useEffect(() => {
    getAllTodo();
  }, []);
  const getAllTodo = async () => {
    const response: any = await fetchAllTodoApi();
    const data = response.data;
    const completedTodos = data.filter((todo: any) => todo.completed === true);
    const pendingTodos = data.filter((todo: any) => todo.completed === false);
    setTodos({
      allTodos: data,
      completed: completedTodos,
      pending: pendingTodos,
    });
  };

  const handleAfterDrop = useCallback(
    (todo: any, source: string, destination: string) => {
      setTodos((prevTodos) => {
        // Create a deep copy of the previous Todos state
        const updatedTodos: any = { ...prevTodos };

        if (source === "pending" && destination === "completed") {
          // Remove the todo from pending list
          updatedTodos.pending = updatedTodos.pending.filter(
            (item: any) => item._id !== todo._id
          );
          // Add the todo to completed list
          updatedTodos.completed = [...updatedTodos.completed, todo];
        }

        if (source === "completed" && destination === "pending") {
          // Remove the todo from completed list
          updatedTodos.completed = updatedTodos.completed.filter(
            (item: any) => item._id !== todo._id
          );
          // Add the todo to pending list
          updatedTodos.pending = [...updatedTodos.pending, todo];
        }

        return updatedTodos;
      });
    },
    []
  );

  return (
    <div>
      <ToastContainer />
      <Grid container spacing={2}>
        <Grid item lg={4} sm={6} xs={12}>
          <TodoCard
            sx={{ height: "100%" }}
            name={"Total"}
            value={Todos.allTodos?.length}
          />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <TodoCard
            sx={{ height: "100%" }}
            name={"Pending"}
            value={Todos.pending?.length}
          />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <TodoCard
            sx={{ height: "100%" }}
            name={"Completed"}
            value={Todos.completed?.length}
          />
        </Grid>
      </Grid>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography variant={"h5"} color={"secondary.dark"}>
          Todo List
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(!open);
          }}
        >
          + Add Todo
        </Button>
      </div>
      <DragDropComponent
        pendingTodos={Todos.pending}
        completedTodos={Todos.completed}
        onAfterDrop={handleAfterDrop}
      />
      <TodoChart todos={Todos.allTodos} />
      {open ? (
        <AddTodo
          open={open}
          setOpen={(val: Boolean) => {
            setOpen(val);
          }}
          afterAdd={getAllTodo}
        />
      ) : null}
    </div>
  );
}

export default DashboardC;
