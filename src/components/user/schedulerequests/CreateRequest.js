import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CurrentUser from "../../auth/CurrentUser";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const CreateRequest = () => {
  //setting context for current user
  const { currentUser, headers } = useContext(CurrentUser);

  //setting state for value of select inputs
  const [requestType, setRequestType] = useState("");
  const [requestFor, setRequestFor] = useState("");
  const [requestForOptions, setRequestForOptions] = useState([]);

  //setting options for request type
  const requestTypeOptions = [{ name: "Certification" }, { name: "Insurance" }];

  //setting options for request for
  const insurance = [
    { name: "Health Insurance" },
    { name: "Travel Insurance" },
  ];

  const certificate = [
    { name: "Health Certificate" },
    { name: "Travel Certificate" },
    { name: "Certificate of Recovery" },
  ];

  //handling changes on request type select input
  const handleRequestTypeChange = (e) => {
    setRequestType(e.target.value);
    requestType === "Certification"
      ? setRequestForOptions(insurance)
      : setRequestForOptions(certificate);
  };

  const handleRequestForChange = (e) => {
    setRequestFor(e.target.value);
  };

  //handling submit of request
  const handleSubmitRequest = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/api/v1/request",
      data: {
        user_id: currentUser.id,
        request_type: requestType,
        name: requestFor,
      },
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper sx={{ height: "90vh" }}>
      <Grid container justifyContent="center">
        <Grid item sx={{ backgroundColor: "#3376b5" }} xs={12} lg={12}>
          <Typography
            sx={{
              p: 2,
              textAlign: "left",
              color: "whitesmoke",
              fontWeight: 400,
            }}
            variant="h5"
          >
            Create a request
          </Typography>
        </Grid>
        <Grid
          sx={{
            mt: { xs: 2, sm: 2, lg: 5 },
            display: "flex",
            flexDirection: "column",
          }}
          item
          xs={10}
          lg={10}
        >
          <Typography
            sx={{
              pr: 3,
              pb: 2,
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#5c5c5c",
            }}
            variant="h6"
          >
            Request type:
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Choose request type</InputLabel>
            <Select
              value={requestType}
              onChange={handleRequestTypeChange}
              label="Choose appointment type"
            >
              {requestTypeOptions.map((item, key) => {
                return (
                  <MenuItem key={key} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
          }}
          item
          xs={10}
          lg={10}
        >
          <Typography
            sx={{
              pr: 3,
              pb: 2,
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#5c5c5c",
            }}
            variant="h6"
          >
            Request for:
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Choose request option</InputLabel>
            <Select
              value={requestFor}
              onChange={handleRequestForChange}
              label="Choose request option"
            >
              {requestForOptions.map((item, key) => {
                return (
                  <MenuItem key={key} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
          }}
          item
          xs={10}
          lg={10}
        >
          <Typography
            sx={{
              pr: 3,
              pb: 2,
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#5c5c5c",
            }}
            variant="h6"
          >
            Reason for request:
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            label="Reason for requisition"
            placeholder="reason for the request"
            rows={4}
            multiline
          />
        </Grid>
        <Grid container item justifyContent="center">
          <Grid item xs={10} lg={10}>
            <Button
              variant="contained"
              sx={{
                mt: { xs: 4, sm: 3, md: 3, lg: 2, xl: 10 },
                ml: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                height: "3em",
                backgroundColor: "#3376b5",
              }}
              onClick={handleSubmitRequest}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreateRequest;
