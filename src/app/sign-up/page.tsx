"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Grid, Paper, TextField, Box, Typography } from "@mui/material";
import { SignUpText } from "@/models";
import { useSignUpMutation } from "@/store/slices/authSlice";
import { setCredentials } from "@/store/slices/credSlice";

const SignUp: React.FC = () => {
  const [signUp] = useSignUpMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setValidationErrors({
      ...validationErrors,
      [name]: !validity.valid,
    });
  };

  const handleSubmitClick = async () => {
    try {
      const { accessToken } = await signUp(formValues).unwrap();
      dispatch(setCredentials(accessToken));
      return router.push("/");
    } catch (error: any) {
      alert(`signUp failed! ${error?.data?.message}`);
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
                <Typography>{SignUpText.SIGN_UP_TITLE}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  name="name"
                  fullWidth
                  required
                  label={SignUpText.FULL_NAME_LABEL}
                  variant="outlined"
                  helperText={validationErrors.name ? SignUpText.FULL_NAME_HELPER_TEXT : ""}
                  inputProps={{
                    pattern: "[A-Za-z ]+",
                  }}
                  onChange={handleChange}
                  value={formValues.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  label={SignUpText.EMAIL_LABEL}
                  variant="outlined"
                  helperText={validationErrors.email ? SignUpText.EMAIL_HELPER_TEXT : ""}
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-password-input"
                  name="password"
                  label={SignUpText.PASSWORD_LABEL}
                  type="password"
                  fullWidth
                  autoComplete="new-password"
                  required
                  onChange={handleChange}
                  value={formValues.password}
                  helperText={validationErrors.password ? SignUpText.PASSWORD_HELPER_TEXT : ""}
                  inputProps={{
                    minLength: 8,
                    pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", // At least one letter, one number, and one special character
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" onClick={handleSubmitClick}>
                  {SignUpText.SUBMIT_BUTTON}
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

export default SignUp;
