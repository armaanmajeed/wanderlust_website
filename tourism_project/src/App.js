import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import Home from './components/Front-End/shared/home';
import AboutUs from './components/Front-End/shared/about-us';
import Landing from './components/Front-End/shared/landing';
import PageNotFound from './components/Front-End/shared/page-not-found';
import North from './components/Front-End/shared/north/north';
import South from './components/Front-End/shared/south/south';
import East from './components/Front-End/shared/east/east';
import West from './components/Front-End/shared/west/west';
import AdminLogin from './components/Front-End/shared/admin-login';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/north" component={North} />
            <Route path="/south" component={South} />
            <Route path="/east" component={East} />
            <Route path="/west" component={West} />
            <Route path="/admin-login" component={AdminLogin} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/" exact component={Landing} />
            <Redirect to="/page-not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}
 
export default App;