import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar.js';
import PirateList from '../components/pirates/PirateList';
import PirateContainer from './pirates/PirateContainer';
import Request from '../helpers/request';
import ShipContainer from './ships/ShipContainer.js';
import RaidContainer from './raids/RaidContainer.js';

class MainContainer extends Component {


  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <NavBar />
            <Switch>
              <Route path="/pirates" component={PirateContainer} />
              <Route path="/ships" component={ShipContainer} />
              <Route path="/raids" component={RaidContainer} />

            </Switch>


          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default MainContainer;
