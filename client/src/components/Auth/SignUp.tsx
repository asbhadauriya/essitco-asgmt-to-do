'use client'

import useFormValidation from "@/hooks/useValidation";
import { signUpApi } from "@/services/authServices";
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react";

function Register() {
  const[userData,setUserData]=useState(
    {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:'',   
    }
  )
    const submitUserData=async(err:any)=>{
      console.log(err);
      if(Object.keys(err).length)
      {
        return;
      }
        try {
            const response=await signUpApi(userData)
            return response
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmitSignUp=(e:any)=>{
      e.preventDefault();
      handleSubmit(e,submitUserData)

    }
    const changeInfoData=(e:any)=>{
      const {name,value}=e.target;
      handleChange(e)      
      setUserData((prev)=>({...prev,[name]:value}))
    }
    const { values, errors, handleChange, handleSubmit, isSubmitting }:any = useFormValidation(userData);
console.log(errors);

  return (
    <>
    <Typography component="h1" variant="h5">
      Sign Up
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmitSignUp} sx={{ mt: 1 }}>
    <TextField
        margin="normal"
        required
        fullWidth
        name="firstName"
        label="FirstName"
        error={errors?.firstName}
        helperText={errors?.firstName}
        onChange={changeInfoData}        
        type="text"
      />
      <TextField
            onChange={changeInfoData}
        margin="normal"
        required
        fullWidth
        error={errors?.lastName}
        helperText={errors?.lastName}

        name="lastName"
        label="LastName"
        type="text"
      />
      <TextField
        error={errors?.email}
        helperText={errors?.email}

      onChange={changeInfoData}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
      onChange={changeInfoData}
        margin="normal"
        required
        error={errors?.password}
        helperText={errors?.password}

        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
      onChange={changeInfoData}
        margin="normal"
        required
        fullWidth
        error={errors?.confirmPassword}
        helperText={errors?.confirmPassword}
        name="confirmPassword"
        label="confirmPassword"
        type="password"
        id="confirmPassword"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </>
  )
}
export default Register