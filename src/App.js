import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paperbase from './Paperbase.js';
import Login from './components/public/Login.js';
import Register from './components/public/Register.js';
import AdminDashboard from './components/admin/AdminDashboard.js';
import AdminMembers from './components/admin/AdminMembers.js';
import './App.css';

import { simpleAction } from './actions/simpleAction';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Paperbase} exact={true}>
            </Route>
            <Route path="/login" component={Login} exact={true}>
            </Route>
            <Route path="/register" component={Register} exact={true}>
            </Route>
            <Route path="/admin" component={AdminDashboard} exact={true}>
            </Route>
            <Route path="/admin/members" component={AdminMembers} exact={true}>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
