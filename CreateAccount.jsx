import * as React from "react";
import "./CreateAccount.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";

var axios = require("axios");

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Login() {
  async function goToHomepage() {
    window.location.href = "http://localhost:3000/login";
  }

  return (
    <div>
      <div className="square">
        <p
          style={{
            color: "black",
            fontSize: 20,
            fontFamily: "sans-serif",
          }}
          align="center"
        >
          Create Account
        </p>
        <p
          style={{
            color: "black",
            fontSize: 14,
            fontFamily: "sans-serif",
          }}
          align="left"
        >
          Name
        </p>
        <input
          id="usersName"
          className="loginInput"
          placeholder="Name"
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
            Sign Up
          </Button>
        </div>
        <br></br>
        <div className="middle">
          <Stack spacing={100} direction="row">
            <div
              style={{
                color: "black",
                fontSize: 12,
                fontFamily: "sans-serif",
              }}
              align="center"
            >
              <a align="center">Already have an account? </a>
              <a href="http://localhost:3000/login">Login</a>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
}
