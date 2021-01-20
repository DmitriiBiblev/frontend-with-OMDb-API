import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../../pages/home/home';
import Movie from '../../pages/movie/movie';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/second">
          <Movie/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
