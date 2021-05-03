import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export default function WelcomeScreen() {
  const history = useHistory();
  return (
    <div>
      <Typography variant="h2">Welcome!</Typography>
      <Typography>Did you recently feed ducks?</Typography>
      <Typography>
        Enter your recent duck feeding information by clicking the button below.
      </Typography>
      <div style={{ padding: 8 }} />
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push("/form")}
      >
        Click Here
      </Button>
    </div>
  );
}
