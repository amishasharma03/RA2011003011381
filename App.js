import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={AllTrainsPage} />
          <Route path="/train/:trainNumber" component={SingleTrainPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
