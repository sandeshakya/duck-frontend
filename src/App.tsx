import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import WelcomeScreen from "./components/WelcomeScreen";
import DuckSubmit from "./components/DuckSubmit";
import Submissions from "./components/Submissions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0073CF",
    },
  },
});

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/">
                <WelcomeScreen />
              </Route>
              <Route exact path="/form">
                <DuckSubmit />
              </Route>
              <Route exact path="/submissions">
                <Submissions />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
}

export default App;
