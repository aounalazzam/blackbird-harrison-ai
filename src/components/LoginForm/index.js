/**
 * This Source Code Edited By Aoun Alazzam
 */

import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import logo from "../../assets/logo.svg";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as EmailValidator from "email-validator";

const validateForm = ({ email, password }) => {
  let isValidEmail = true;
  let isValidPassword = true;

  if (!EmailValidator.validate(email)) {
    isValidEmail = false;
  }

  if (
    (!password.match(/[A-z]/g) ||
      !password.match(/[~!@#$%^&*()_+{}:;'"\\<>,.?\/]/g) ||
      !password.match(/[0-9]{1}/g)) &&
    password.length < 8
  ) {
    isValidPassword = false;
  }

  return { isValidEmail, isValidPassword };
};

export default function LoginForm() {
  const [showAlert, setShowAlert] = useState(false);

  const [validate, setValidate] = useState({
    isValidEmail: true,
    isValidPassword: true,
  });

  const [helperPassMessage, setHelperPassMessage] = useState("");
  const [helperEmailMessage, setHelperEmailMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setHelperPassMessage("");
    setHelperEmailMessage("");

    setValidate({ isValidEmail: true, isValidPassword: true });

    const { isValidEmail, isValidPassword } = validateForm({
      email: data.get("email"),
      password: data.get("password"),
    });

    setValidate({ isValidEmail, isValidPassword });

    if (!isValidPassword) {
      setHelperPassMessage("Invalid Password");
    }

    if (!isValidEmail) {
      setHelperEmailMessage("Invalid Email");
    }

    setShowAlert(isValidEmail && isValidPassword);
  };

  return (
    <>
      {showAlert && (
        <Snackbar
          open={showAlert}
          message={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
        >
          <Alert>Login Success</Alert>
        </Snackbar>
      )}
      <Grid
        item
        sm={4}
        md={7}
        xs={false}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              my: 2,
            }}
          >
            <img src={logo} width="147" alt="harrison.ai" />
          </Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            noValidate
            sx={{ mt: 1 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              autoFocus
              required
              fullWidth
              id="email"
              name="email"
              margin="normal"
              autoComplete="email"
              label="Email Address"
              error={!validate.isValidEmail}
              helperText={helperEmailMessage}
            />
            <TextField
              required
              fullWidth
              id="password"
              margin="normal"
              type="password"
              name="password"
              label="Password"
              helperText={helperPassMessage}
              autoComplete="current-password"
              error={!validate.isValidPassword}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export { validateForm };
