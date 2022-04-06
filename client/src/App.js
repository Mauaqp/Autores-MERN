import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Views
import Main from './views/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} render={(routeProps) => <Main {...routeProps}/>}></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
