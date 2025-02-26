import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;