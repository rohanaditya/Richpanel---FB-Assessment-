import React from "react";
import "./Home.css";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ReplayIcon from "@mui/icons-material/Replay";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import ListItemText from "@material-ui/core/ListItemText";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles({
  chatSection: {
    width: "100%",
    height: "100vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "3px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    width: "160vh",
    overflowY: "auto",
  },
});

const Chat = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <Stack direction="row" spacing={2}>
            <p
              style={{
                padding: "0 15px",
                color: "black",
                fontSize: 24,
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Conversations
            </p>
            <IconButton color="primary">
              <ReplayIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Divider />
          <List>
            <ListItem button key="RemySharp">
              <Checkbox {...label} />
              <ListItemText
                style={{
                  padding: "0px 10px",
                  fontWeight: "bold",
                }}
                primary="Amit RG"
              >
                Amit RG
              </ListItemText>
              <ListItemText secondary="10m" align="right"></ListItemText>
            </ListItem>
            <ListItem button key="Alice">
              <Checkbox {...label} />
              <ListItemText
                style={{
                  padding: "0px 10px",
                  fontWeight: "bold",
                }}
                primary="Hitesh Saxena"
              >
                Hitesh Saxena
              </ListItemText>
              <ListItemText secondary="10m" align="right"></ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <p
            style={{
              padding: "0 15px",
              color: "black",
              fontSize: 24,
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Amit RG
          </p>

          <Divider />
          <List className={classes.messageArea}>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={0}>
                    <ListItemIcon>
                      <Avatar src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg" />
                    </ListItemIcon>
                    <ListItemText
                      align="left"
                      primary="Is it in stock right now?"
                    ></ListItemText>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{
                      padding: "0px 50px",
                    }}
                    align="left"
                    secondary="Amit RG - Mar 05, 2:22 AM"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={{
                      padding: "0px 70px",
                    }}
                    align="right"
                    primary="We've 3 left in stock!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={0}>
                    <ListItemText
                      style={{
                        padding: "0 15px",
                      }}
                      align="right"
                      primary="If you order before 8PM we can ship it today."
                    ></ListItemText>
                    <ListItemIcon>
                      <Avatar src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png" />
                    </ListItemIcon>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{
                      padding: "0 70px",
                    }}
                    align="right"
                    secondary="Richard Panel - Mar 05, 2:22 AM"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "15px" }}>
            <Grid item xs={11}>
              <input
                type="text"
                size="121"
                placeholder="Message Hitesh Saxena"
              ></input>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
