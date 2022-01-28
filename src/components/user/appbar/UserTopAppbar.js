import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CurrentUser from "../../auth/CurrentUser";
import AppBar from "@mui/material/AppBar";
import AppbarNavigation from "../context/AppbarNavigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TodayIcon from "@mui/icons-material/Today";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import binary from "../../../images/binary.svg";

const UserTopAppbar = () => {
  //setting context
  const {
    home,
    setHome,
    setMenuActive,
    restrictions,
    setRestrictions,
    scheduleRequests,
    setScheduleRequests,
    userDetails,
    setUserDetails,
  } = useContext(AppbarNavigation);

  //setting context for currentUser logged in
  const { currentUser, headers } = useContext(CurrentUser);

  //declaring navigation for logout
  let navigate = useNavigate();

  //setting anchor for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  //handling logout
  const handleLogout = () => {
    axios({
      method: "DELETE",
      url: "https://health-users-api.herokuapp.com/auth/sign_out",
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then(navigate("/login"))
      .catch((err) => {
        console.log(err);
      });
    localStorage.removeItem("userDetails");
    localStorage.removeItem("userAuth");
    localStorage.removeItem("amadeusToken");
  };

  //handling active navigations
  const handleHomeNav = () => {
    setHome(true);
    setScheduleRequests(false);
    setRestrictions(false);
    setUserDetails(false);
  };
  const handleUserNav = () => {
    setHome(false);
    setScheduleRequests(false);
    setRestrictions(false);
    setUserDetails(true);
  };
  const handleRestrictionsNav = () => {
    setHome(false);
    setScheduleRequests(false);
    setRestrictions(true);
    setUserDetails(false);
  };
  const handleCalendarNav = () => {
    setHome(false);
    setScheduleRequests(true);
    setRestrictions(false);
    setUserDetails(false);
  };

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#fcfcfc",
          borderBottom: "1px solid #e0e0e0",
          display: { xs: "none", sm: "block" },
          zIndex: "1",
        }}
        elevation={0}
      >
        <Toolbar sx={{ p: 1 }}>
          {/* <img
            style={{ position: "absolute", top: -10 }}
            src={binary}
            alt="background-image"
          /> */}
          <Container maxWidth="md">
            <Grid container item justifyContent="space-evenly" spacing={0}>
              <Grid item md={3}>
                <Tooltip title={<h3>Home</h3>}>
                  <IconButton
                    sx={{
                      borderRadius: 3,
                      width: "100%",
                      p: 1,
                    }}
                    onClick={handleHomeNav}
                  >
                    {home ? (
                      <HomeIcon
                        sx={{ color: "#3376b5", fontSize: "2.25rem" }}
                      />
                    ) : (
                      <HomeOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item md={3}>
                <Tooltip title={<h3>Schedules & Requests</h3>}>
                  <IconButton
                    sx={{
                      borderRadius: 3,
                      width: "100%",
                    }}
                    onClick={handleCalendarNav}
                  >
                    {scheduleRequests ? (
                      <TodayIcon
                        sx={{ color: "#3376b5", fontSize: "2.25rem" }}
                      />
                    ) : (
                      <TodayOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item md={3}>
                <Tooltip title={<h3>Restrictions</h3>}>
                  <IconButton
                    sx={{
                      borderRadius: 3,
                      width: "100%",
                    }}
                    onClick={handleRestrictionsNav}
                  >
                    {restrictions ? (
                      <AssignmentIcon
                        sx={{ color: "#3376b5", fontSize: "2.25rem" }}
                      />
                    ) : (
                      <AssignmentOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item md={3}>
                <Tooltip title={<h3>Account</h3>}>
                  <IconButton
                    sx={{
                      borderRadius: 3,
                      width: "100%",
                    }}
                    onClick={handleUserNav}
                  >
                    {userDetails ? (
                      <AccountCircleIcon
                        sx={{ color: "#3376b5", fontSize: "2.25rem" }}
                      />
                    ) : (
                      <AccountCircleOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Container>
          <Button
            sx={{
              position: "fixed",
              top: 18,
              right: 50,
              zIndex: 10,
              color: "#3376b5",
              display: {
                xs: "none",
                md: "none",
                lg: "block",
              },
            }}
            variant="text"
            onClick={handleMenuOpen}
          >
            {`${currentUser.first_name} ${currentUser.last_name}`}
          </Button>
          <Menu
            PaperProps={{
              style: {
                width: 230,
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default UserTopAppbar;
