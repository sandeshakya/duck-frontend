import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import WelcomeScreen from "./WelcomeScreen";
import DuckSubmit from "./DuckSubmit";
import Submissions from "./Submissions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0073CF",
    },
  },
});

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8082/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "local",
      },
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const client = createApolloClient();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ApolloProvider client={client}>
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
        </ApolloProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
