"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Grid, Paper, TextField, Box, Typography } from "@mui/material";
import { SignInText } from "@/models";
import { useSignInMutation } from "@/store/slices/authSlice";
import { setCredentials } from "@/store/slices/credSlice";
import Link from "next/link";

const SignIn: React.FC = () => {
  const [signIn] = useSignInMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmitClick = async () => {
    try {
      const { accessToken } = await signIn(formValues).unwrap();
      dispatch(setCredentials(accessToken));
      return router.replace("/");
    } catch (error: any) {
      alert(`signIn failed! ${error?.data?.message}`);
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={4.5}></Grid>
      <Grid item xs={3}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Paper sx={{ padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>{SignInText.SIGN_IN_TITLE}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  label={SignInText.EMAIL_LABEL}
                  variant="outlined"
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-password-input"
                  name="password"
                  label={SignInText.PASSWORD_LABEL}
                  type="password"
                  fullWidth
                  autoComplete="new-password"
                  required
                  onChange={handleChange}
                  value={formValues.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Link href="/sign-up" style={{ color: "navy", textDecoration: "underline", paddingLeft: "5px" }}>
                  create account
                </Link>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" onClick={handleSubmitClick}>
                  {SignInText.SUBMIT_BUTTON}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={4.5}></Grid>
    </Grid>
  );
};

export default SignIn;
