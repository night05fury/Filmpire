import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { NavBar, Movies, MovieInfo, Profile, Actors } from '.';

const App = () => (
  <div>

    <CssBaseline />
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/movie/:id">
          <h1>
            Movie Information
            <MovieInfo />
          </h1>
        </Route>
        <Route exact path="/actors/:id">
          <h1>
            Actors
            <Actors />
          </h1>
        </Route>
        <Route path="/movies">
          <h1>
            Movies Home - Filmpire
            <Movies />
          </h1>
        </Route>
        <Route path="/profile/:id">
          <h1>
            Profile - Filmpire
            <Profile />
          </h1>
        </Route>

      </Switch>
    </main>
  </div>
);

export default App;
