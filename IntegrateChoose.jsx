import * as React from "react";
import "./IntegrateChoose.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function IntegrateChoose() {
  async function goToNextPage() {
    window.location.href = "http://localhost:3000/home";
  }
  async function goToPreviousPage() {
    window.location.href = "http://localhost:3000/pageConnect";
  }

  return (
    <div>
      <div className="square3">
        <div className="middle">
          <div
            className="integrating1"
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "sans-serif",
              fontWeight: 500,
            }}
            align="center"
          >
            Facebook Page Integration
          </div>
          <p
            className="adjust"
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
            align="center"
          >
            Integrated Page: Amazon Business
          </p>
          <br></br>
          <Stack spacing={2}>
            <Button
              variant="contained"
              align="center"
              onClick={goToPreviousPage}
              style={{
                background: "#D0342C",
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "30px",
              }}
            >
              Delete Integration
            </Button>

            <Button
              variant="contained"
              align="center"
              onClick={goToNextPage}
              style={{
                background: "#224d8f",
                maxWidth: "300px",
                maxHeight: "50px",
                minWidth: "300px",
                minHeight: "30px",
              }}
            >
              Reply To Messages
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
