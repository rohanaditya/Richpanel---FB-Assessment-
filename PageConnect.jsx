import * as React from "react";
import "./PageConnect.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

let cities = [
  {
    id: 1,
    name: "CHENNAI",
  },
];

export default function Connect() {
  async function goToNextPage() {
    window.location.href = "http://localhost:3000/integrateChoose";
  }

  return (
    <div>
      <div className="square2">
        <div className="middle">
          <div
            className="integrating"
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
            align="center"
          >
            Facebook Page Integration
          </div>
          <Button
            variant="contained"
            align="center"
            onClick={goToNextPage}
            style={{
              background: "#224d8f",
              maxWidth: "250px",
              maxHeight: "50px",
              minWidth: "250px",
              minHeight: "30px",
            }}
          >
            Connect Page
          </Button>
        </div>
      </div>
    </div>
  );
}
