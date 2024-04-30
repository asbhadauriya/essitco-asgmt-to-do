import React, { useState, useCallback, useMemo } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const DragDropComponent = ({ pendingTodos, completedTodos, onAfterDrop }:any) => {
  const [draggedItem, setDraggedItem] = useState<any>(null);

  const handleDragStart = useCallback((e:any, todo:any) => {
    setDraggedItem(todo);
  }, []);

  const handleDragOver = useCallback((e:any) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e:any, destination:any) => {
      e.preventDefault();
      const updatedPendingTodos = [...pendingTodos];
      const updatedCompletedTodos = [...completedTodos];

      if (destination === 'completed' && draggedItem) {
        const index = updatedPendingTodos.findIndex((todo) => todo.id === draggedItem.id);
        if (index !== -1) {
          const [draggedTodo] = updatedPendingTodos.splice(index, 1);
          updatedCompletedTodos.push(draggedTodo);
          onAfterDrop(draggedTodo, 'pending', 'completed');
        }
      }

      if (destination === 'pending' && draggedItem) {
        const index = updatedCompletedTodos.findIndex((todo) => todo.id === draggedItem?.id);
        if (index !== -1) {
          const [draggedTodo] = updatedCompletedTodos.splice(index, 1);
          updatedPendingTodos.push(draggedTodo);
          onAfterDrop(draggedTodo, 'completed', 'pending');
        }
      }

      setDraggedItem(null);
    },
    [draggedItem, pendingTodos, completedTodos, onAfterDrop]
  );

  const pendingList = useMemo(() => (
    <List onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'pending')} style={{ minHeight: '200px' }}>
      {pendingTodos.map((todo:any, index:number) => (
        <ListItem key={todo.id} draggable onDragStart={(e) => handleDragStart(e, todo)}>
          <ListItemText primary={todo.task} />
        </ListItem>
      ))}
    </List>
  ), [pendingTodos, handleDragOver, handleDrop, handleDragStart]);

  const completedList = useMemo(() => (
    <List onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'completed')} style={{ minHeight: '200px' }}>
      {completedTodos.map((todo:any, index:number) => (
        <ListItem key={todo.id} draggable onDragStart={(e) => handleDragStart(e, todo)}>
          <ListItemText primary={todo.task} />
        </ListItem>
      ))}
    </List>
  ), [completedTodos, handleDragOver, handleDrop, handleDragStart]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <Paper style={{ width: '45%', padding: '10px' }}>
        <Typography variant="h6">Pending Todos</Typography>
        {pendingList}
      </Paper>

      <Paper style={{ width: '45%', padding: '10px' }}>
        <Typography variant="h6">Completed Todos</Typography>
        {completedList}
      </Paper>
    </div>
  );
};

export default DragDropComponent;
