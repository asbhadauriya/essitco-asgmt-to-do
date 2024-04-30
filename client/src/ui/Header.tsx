import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const Header = () => {
    const handleLogout=()=>{
        localStorage.clear();

    }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo List
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          Logout
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
