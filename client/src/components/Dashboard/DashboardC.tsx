"use client";
import { useCallback, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { fetchAllTodoApi, updateTodoApi } from "@/services/todoServices";
import DragDropComponent from "./TodoDragDrop";
import TodoChart from "./BarTodo";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  TableHead,
  Typography,
} from "@mui/material";
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
  const [currSelect, setCurrSelect] = useState();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    getAllTodo();
  }, []);
  const getAllTodo = async () => {
    const response: any = await fetchAllTodoApi();
    const data = response.data;
    calculateProgress(data);
    const completedTodos = data.filter((todo: any) => todo.completed === true);
    const pendingTodos = data.filter((todo: any) => todo.completed === false);

    setTodos({
      allTodos: data,
      completed: completedTodos,
      pending: pendingTodos,
    });
  };
  const calculateProgress = (todos: any) => {
    if (todos.length === 0) {
      setProgress(0);
      return;
    }
    const completedCount = todos.filter((todo: any) => todo.completed).length;
    const totalTasks = todos.length;
    const percentage = (completedCount / totalTasks) * 100;
    setProgress(percentage);
  };

  const handleAfterDrop = useCallback(
    async (todo: any, source: string, destination: string) => {
      await updateTodoApi(todo._id, { completed: destination === "completed" });
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
      <Box className="mt-5">
        <LinearProgress variant="determinate" value={progress} />
        <div style={{ textAlign: "center", marginTop: "5px" }}>
          <span>{progress.toFixed(2)}%</span>
        </div>
      </Box>
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

const Table = () => {
  return (
    <>
      <Table></Table>
    </>
  );
};
