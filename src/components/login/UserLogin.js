import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formStyle } from "../styles/Styles";
import { loginImage } from "../styles/Styles";
import Alerts from "../alerts/Alerts";
import Checkbox from "@mui/material/Checkbox";
import CurrentUser from "../auth/CurrentUser";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Thermometer from "../../images/Thermometer.svg";
import binary from "../../images/binary.svg";
import Team from "../../images/Team.svg";

const UserLogin = () => {
  const form = formStyle();
  const imageStyle = loginImage();
  const navigate = useNavigate();

  //setting axios for amadeus authentication
  const axios = require("axios");
  const qs = require("qs");
  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: "n1Um3XcrZMZOXddVkoRccGASpk080nT8",
    client_secret: "C3U3vXyHrVrTpLgt",
  });
  const config = {
    method: "post",
    url: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {},
    data: data,
  };

  //Setting context
  const { setAmadeus, setCurrentUser, setHeaders } = useContext(CurrentUser);

  //Declaring states for textfields value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //setting state for password visibility
  const [visible, setVisible] = useState(false);

  //setting state for checkbox
  const [checked, setChecked] = useState(true);

  //Setting state for any error on login
  const [error, setError] = useState(false);

  //handling password visibility
  const handlePasswordVisibility = () => {
    setVisible(!visible);
  };

  //handling change event for checkbox
  const handleCheckbox = (evt) => {
    setChecked(evt.target.checked);
  };

  //Handling error display
  const handleError = () => {
    setError(true);
    setInterval(() => {
      setError(false);
    }, 4000);
  };
  //Handling onchange for value of textfields
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //Handling login post request to api
  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://health-users-api.herokuapp.com/auth/sign_in",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        const userDetails = {
          id: res.data.data.id,
          email: res.data.data.email,
          first_name: res.data.data.first_name,
          middle_name: res.data.data.middle_name,
          last_name: res.data.data.last_name,
          covid_status: res.data.data.covid_status,
          role: res.data.data.role,
          gender: res.data.data.gender,
          address: res.data.data.address,
          birthday: res.data.data.birthday,
        };

        setCurrentUser({
          id: res.data.data.id,
          email: res.data.data.email,
          first_name: res.data.data.first_name,
          middle_name: res.data.data.middle_name,
          last_name: res.data.data.last_name,
          covid_status: res.data.data.covid_status,
          role: res.data.data.role,
          gender: res.data.data.gender,
          address: res.data.data.address,
          birthday: res.data.data.birthday,
        });

        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        const { "access-token": token } = res.headers;
        const auth = {
          token: token,
          client: res.headers.client,
          expiry: res.headers.expiry,
          uid: res.headers.uid,
        };
        setHeaders({
          token: token,
          client: res.headers.client,
          expiry: res.headers.expiry,
          uid: res.headers.uid,
        });

        checked
          ? localStorage.setItem("userAuth", JSON.stringify(auth))
          : sessionStorage.setItem("userAuth", JSON.stringify(auth));

        //navigating to Dashboard component
        navigate("/user");
      })
      .catch((err) => {
        handleError();
        console.log(err);
      });

    axios(config)
      .then((response) => {
        const { access_token: token } = response.data;
        setAmadeus({ token: token });
        const amadeusToken = {
          token: token,
        };

        localStorage.setItem("amadeusToken", JSON.stringify(amadeusToken));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handling login on enter key
  const handleEnterKeyLogin = (e) => {
    if (e.key === "Enter") handleLogin(e);
  };

  return (
    <div>
      <Link
        sx={{
          position: "absolute",
          top: 30,
          left: 40,
          zIndex: 10,
          fontSize: "1.2rem",
        }}
        href="/binary"
      >
        Go back home
      </Link>
      <Grid container>
        <Grid container item sm={12} md={12} lg={12} xl={12}>
          <img className={imageStyle.root} src={Thermometer} alt="background" />
          <img className={imageStyle.team} src={Team} alt="background" />
          <Paper
            className={form.formContainer}
            sx={{ backgroundColor: "#ebebeb" }}
            elevation={0}
          >
            {error ? <Alerts /> : null}
            <Grid sx={{ zIndex: 10 }} item sm={8} md={4} xl={3}>
              <Paper
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#fcfcfc",
                  zIndex: 1,
                }}
                className={form.form}
                elevation={4}
              >
                <img style={{ height: "150px" }} src={binary} alt="" />
                <TextField
                  onChange={handleEmail}
                  onKeyDown={handleEnterKeyLogin}
                  value={email}
                  sx={{
                    paddingBottom: "1.2rem",
                    marginTop: "2.7em",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  label="Email"
                  variant="outlined"
                />
                <FormControl sx={{ width: "80%" }}>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    onChange={handlePassword}
                    onKeyDown={handleEnterKeyLogin}
                    value={password}
                    sx={{
                      width: "100%",
                      backgroundColor: "#fcfcfc",
                    }}
                    label="Password"
                    variant="outlined"
                    type={visible ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        {visible ? (
                          <VisibilityOffIcon
                            sx={{ cursor: "pointer" }}
                            onClick={handlePasswordVisibility}
                          />
                        ) : (
                          <VisibilityIcon
                            sx={{ cursor: "pointer" }}
                            onClick={handlePasswordVisibility}
                          />
                        )}
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormGroup
                  sx={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "start",
                    mt: 1,
                  }}
                >
                  <FormControlLabel
                    sx={{ color: "gray" }}
                    control={
                      <Checkbox
                        sx={{ color: "#8f8f8f" }}
                        checked={checked}
                        onChange={handleCheckbox}
                      />
                    }
                    label="Remember me"
                  />
                </FormGroup>

                <Button
                  onClick={handleLogin}
                  sx={{
                    height: "3.7em",
                    fontWeight: "bold",
                    width: "80%",
                    mt: 1,
                  }}
                  variant="contained"
                >
                  Login
                </Button>
                <div className={form.optionsContainer}>
                  <Paper className={form.signupContainer} elevation={0}>
                    <Typography
                      sx={{ paddingRight: "0.2rem", mb: 10, color: "#4d4d4d" }}
                    >
                      Don't have an account yet?
                    </Typography>
                    <Link
                      href="/register"
                      sx={{ cursor: "pointer", fontWeight: "500" }}
                      underline="hover"
                    >
                      Sign up
                    </Link>
                  </Paper>
                </div>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserLogin;
