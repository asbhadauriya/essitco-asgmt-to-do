"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { signInApi } from "@/services/authServices";
import useFormValidation from "@/hooks/useValidation";
import { useRouter } from "next/navigation";
import LoadingButton from "@/ui/LoadingButton";
import { CommonSuccess } from "@/helpers/CommonMessage";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LogIn() {
  const router = useRouter();
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const submitUserData = async (err: any) => {
    if (Object.keys(err).length) {
      // return;
    }
    try {
      setLoading(true);
      const response: any = await signInApi(userData);
      console.log(response);

      setLoading(false);
      if (response.status == 200 && response?.data?.token) {
        CommonSuccess("User Login Suuccessfully");
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      }
      return response;
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  const changeInfoData = (e: any) => {
    const { name, value } = e.target;
    handleChange(e);
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitSignin = (event: any) => {
    event.preventDefault();
    handleSubmit(event, submitUserData);
  };
  const { values, errors, handleChange, handleSubmit, isSubmitting }: any =
    useFormValidation(userData);
  console.log(errors);

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          error={errors.email}
          helperText={errors.email}
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
          error={errors.password}
          helperText={errors.password}
          onChange={changeInfoData}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <LoadingButton
          loading={loading}
          type="button"
          onClick={handleSubmitSignin}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </LoadingButton>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/auth/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
}
