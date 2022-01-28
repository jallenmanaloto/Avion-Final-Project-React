import React from "react";
import { makeStyles } from "@mui/styles";

export const adminStyle = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    backgroundColor: "#f5f5f5",
  },
});

export const appbarStyle = makeStyles({
  accountButton: {
    position: "absolute",
    right: "4em",
    display: "flex",
    alignItems: "center",
  },
  accountCircle: {
    color: "whitesmoke",
  },
});

export const caseStyle = makeStyles({
  casePaper: {
    paddingTop: "1.5rem",
    paddingBottom: "1.3em",
  },
  caseTitle: {
    color: "#3376b5",
    textAlign: "center",
  },
  caseData: {
    color: "#545454",
    textAlign: "center",
  },
  caseDate: {
    color: "#737373",
    textAlign: "center",
  },
});

export const cellStyle = makeStyles({
  root: {
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
      outline: "none",
    },
  },
});

export const chartsStyle = makeStyles({
  chartTitle: {
    color: "#3376b5",
  },
});

export const countryRestrictionStyle = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    paddingBottom: 6,
    marginLeft: "4rem",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
  statements: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 15,
    marginLeft: "4rem",
  },
});

export const drawerStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "white",
    borderRight: "1px solid #e0e0e0",
  },
  expandIcon: {
    color: "#707070",
  },
  navigationText: {
    color: "#575757",
  },
});

export const establishmentStyle = makeStyles({
  selectContainer: {
    // display: "flex",
    // justifyContent: "start",
  },
});

export const formStyle = makeStyles({
  display: {
    backgroundColor: "lightcoral",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    padding: "0",
    marginBottom: "12em",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  optionsContainerRegister: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: "1rem",
  },
});

export const landingStyle = makeStyles({
  root: {
    width: "100vw",
    overflowX: "hidden",
  },
  affiliation: {
    display: "flex",
    alignItems: "center",
  },
  brand: {
    height: "6.2em",
    marginBottom: "3em",
  },
  heroFirst: {
    height: "70vh",
    width: "50vw",
  },
  healthPassport: {
    height: "70vh",
    width: "50vw",
  },
  firstPage: {
    minHeight: "100vh",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: "2.6em",
    marginTop: "0.28rem",
  },
  secondPage: {
    minHeight: "100vh",
    width: "100vw",
    overflowX: "hidden",
    backgroundColor: "#f2f4f5",
    display: "flex",
    alignItems: "center",
  },
  summaryContainer: {
    width: "44vw",
    display: "flex",
    flexDirection: "column",
  },
});

export const loginErrorAlert = makeStyles({
  root: {
    position: "absolute",
    width: "25%",
    top: "3em",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

export const loginImage = makeStyles({
  root: {
    height: "66vh",
    width: "100vw",
    position: "absolute",
    top: "-11%",
    left: "30%",
    transform: "translateX(-50%)",
    borderRadius: "12%",
    zindex: 1,
    opacity: 0.25,
  },
  team: {
    height: "66vh",
    width: "100vw",
    position: "absolute",
    bottom: 0,
    left: "70%",
    transform: "translateX(-50%)",
    borderRadius: "12%",
    zindex: 1,
    opacity: 0.25,
  },
});

export const NotFoundStyle = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: "85vh",
    width: "85vw",
    marginBottom: "10em",
  },
});

export const userStyle = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ebebeb",
  },
  homeRoot: {
    overflowY: "auto",
    paddingTop: "1rem",
    height: "96vh",
  },
});
