import React from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline, Pagination } from "@mui/material";

import { NavBar, Movies, MovieInfo, Profile, Actors} from ".";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <h1>
              <MovieInfo />
            </h1>
          </Route>
          <Route exact path="/actors/:id">
            <h1>
              <Actors />
            </h1>
          </Route>
          <Route exact path="/">
            <h1>
              <Movies />
            </h1>
          </Route>
          <Route exact path="/profile/:id">
            <h1>
              <Profile />
            </h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
