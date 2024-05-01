'use client'
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router=useRouter()
    const handleLogout=(e:any)=>{
        e.preventDefault();
        localStorage.clear();
        router.push('/auth/signin')
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
