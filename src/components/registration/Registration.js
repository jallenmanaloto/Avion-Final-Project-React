import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { formStyle } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import binary from "../../images/binary.svg";
import Team from "../../images/Team.svg";
import Thermometer from "../../images/Thermometer.svg";
import { loginImage } from "../styles/Styles";

const Registration = () => {
  //form variable for style imported
  const form = formStyle();
  const classes = loginImage();

  //setting value for each textfields
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //handling onChange event for setting states
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleName = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/auth",
      data: {
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        // Create alert to show that registration is successful and to check email for confirmation
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleRegister(e);
  };

  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Grid container>
        <Grid container item xl={12}>
          <img
            style={{
              height: "66vh",
              width: "100vw",
              position: "absolute",
              top: "-11%",
              left: 0,
              transform: "translateX(-20%)",
              borderRadius: "12%",
              zindex: -1,
              opacity: 0.25,
            }}
            src={Thermometer}
            alt="background-image"
          />
          <img
            style={{
              height: "66vh",
              width: "100vw",
              position: "absolute",
              bottom: 0,
              left: "70%",
              transform: "translateX(-50%)",
              borderRadius: "12%",
              zindex: 1,
              opacity: 0.25,
            }}
            src={Team}
            alt="background-image"
          />
          <Paper
            className={form.formContainer}
            sx={{ backgroundColor: "#ebebeb" }}
            elevation={0}
          >
            <Grid sx={{ zIndex: 10 }} item sm={5} md={6} lg={5} xl={3}>
              <Paper
                className={form.form}
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#fcfcfc",
                  height: "70vh",
                  marginBottom: 0,
                  paddingBottom: "2em",
                  zindex: 10,
                }}
                elevation={9}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#4d4d4d",
                    paddingTop: "1rem",
                  }}
                  variant="h4"
                >
                  Sign up
                </Typography>
                <TextField
                  sx={{
                    paddingBottom: "1.2rem",
                    marginTop: "2.7em",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  onChange={handleEmail}
                  onKeyDown={handleKeyDown}
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    paddingBottom: "1.2rem",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  onChange={handleFirstName}
                  onKeyDown={handleKeyDown}
                  label="First name"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    paddingBottom: "1.2rem",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  onChange={handleMiddleName}
                  onKeyDown={handleKeyDown}
                  label="Middle name"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    paddingBottom: "1.2rem",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  onChange={handleLastName}
                  onKeyDown={handleKeyDown}
                  label="Last name"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    paddingBottom: "1.2rem",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  onChange={handlePassword}
                  onKeyDown={handleKeyDown}
                  label="Password"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    paddingBottom: "1.2rem",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  onChange={handleConfirmPassword}
                  onKeyDown={handleKeyDown}
                  label="Confirm password"
                  variant="outlined"
                />
                <Button
                  sx={{ height: "3.7em", fontWeight: "bold", width: "80%" }}
                  variant="contained"
                  onClick={handleRegister}
                >
                  Sign Up
                </Button>
                <div className={form.optionsContainerRegister}>
                  <Typography sx={{ paddingRight: "0.2rem", color: "#4d4d4d" }}>
                    Already got an account?
                  </Typography>
                  <Link
                    onClick={handleLogin}
                    sx={{ cursor: "pointer", fontWeight: "500" }}
                    underline="hover"
                  >
                    Login
                  </Link>
                </div>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Registration;
