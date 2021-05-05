import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ flex: 1 }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="home"
            onClick={() => history.push("/")}
          >
            <HomeIcon />
          </IconButton>
          <div style={{ flex: 1, display: "flex" }}>
            <Typography variant="h3">Feeding Ducks</Typography>
          </div>
          <Button color="inherit" onClick={() => history.push("/submissions")}>
            View Submissions
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    flexDirection: "row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
