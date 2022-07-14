import * as React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";

var axios = require("axios");

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Login() {
  async function goToHomepage() {
    var loginUserNameInput = document.getElementById("userNameLogin").value;
    var loginPasswordInput = document.getElementById("passwordLogin").value;
    if (
      loginUserNameInput == "test@test.com" ||
      loginUserNameInput == "admin@gmail.com" ||
      loginUserNameInput == "rohan@gmail.com"
    ) {
      window.location.href = "http://localhost:3000/pageConnect";
    } else {
      window.alert("Invalid Credentials!");
    }
  }

  return (
    <div>
      <div className="square1">
        <p
          style={{
            color: "black",
            fontSize: 20,
            fontFamily: "sans-serif",
          }}
          align="center"
        >
          Login to your account
        </p>
        <p
          style={{
            color: "black",
            fontSize: 14,
            fontFamily: "sans-serif",
          }}
          align="left"
        >
          Email
        </p>
        <input
          id="userNameLogin"
          className="loginInput"
          placeholder="Email"
          type="text"
        ></input>
        <p
          style={{
            color: "black",
            fontSize: 14,
            fontFamily: "sans-serif",
          }}
          align="left"
        >
          Password
        </p>
        <input
          id="passwordLogin"
          className="loginInput"
          placeholder="Password"
          type="password"
        ></input>
        <br></br>
        <Stack spacing={0} direction="row">
          <Checkbox {...label} />
          <p
            style={{
              paddingTop: "2px",
              color: "black",
              fontSize: 12,
              fontFamily: "sans-serif",
            }}
          >
            Remember Me
          </p>
        </Stack>
        <div className="middle">
          <Button
            variant="contained"
            onClick={goToHomepage}
            style={{
              background: "#224d8f",
              maxWidth: "250px",
              maxHeight: "50px",
              minWidth: "250px",
              minHeight: "30px",
            }}
          >
            Login
          </Button>
        </div>
        <br></br>
        <Stack spacing={100} direction="row">
          <div
            style={{
              color: "black",
              fontSize: 12,
              fontFamily: "sans-serif",
            }}
            align="center"
          >
            <a align="center">New to MyApp? </a>
            <a href="http://localhost:3000/">Sign Up</a>
          </div>
        </Stack>
      </div>
    </div>
  );
}
