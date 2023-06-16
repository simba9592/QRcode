import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from "react-redux";
import { userActions } from "../redux/user";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../containers/Login/Login';
import Signup from '../containers/Signup/Signup';
import Settings from '../containers/Settings/Settings';
import AdminSettings from '../containers/AdminSettings/AdminSettings';
import Viewer from '../containers/Viewer/Viewer';

const Routes = ({isAuth, companyName, getCompanyName}) => {  
  
  const [title, setTitle] = useState("");

  // useEffect(() => {
  //   if (companyName) {
  //     document.title = companyName;
  //   } else {
  //     getCompanyName();
  //   }    
  // }, [companyName]);

  return (
    <Router>
      <Switch>
        {/* <Route exact path='/' component={() => isAuth? <Redirect to="/settings" /> : <Redirect to="/login" />} /> */}
        <Route exact path='/' component={Settings} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/admin' component={AdminSettings} />
        <Route exact path='/:path' component={Viewer} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.user.user ? true : false,
  companyName : state.user.companyName
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyName: () => {
      dispatch(userActions.getCompanyNameInfo());
    },
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Routes);