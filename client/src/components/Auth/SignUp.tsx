'use client'

import { CommonSuccess } from "@/helpers/CommonMessage";
import useFormValidation from "@/hooks/useValidation";
import { signUpApi } from "@/services/authServices";
import LoadingButton from "@/ui/LoadingButton";
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material"
import { useRouter } from "next/navigation";
import { useState } from "react";

function Register() {
  const router=useRouter()
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
        try {

            const response:any=await signUpApi(userData)
      setLoading(false);

            if (response?.status == 200) {
              CommonSuccess("User Added Suuccessfully");
              router.push('/auth/signin')
            }
            console.log(response)
            return response
        } catch (error) {
      setLoading(false);

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
      <LoadingButton
      loading={loading}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </LoadingButton>
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