import React , {useEffect} from 'react';
import {Routes , Route , Navigate} from 'react-router-dom';
import {connect}from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { checkCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

import LoginPage from './pages/login/login.component';

import './assets/style/style.scss';
import AccountPage from './pages/account/account.component';

const App = ({checkCurrentUser , currentUser}) => {

  useEffect(() => {
    checkCurrentUser();
  } , [checkCurrentUser])


  return (
    <>
    <Routes>
      <Route exact path='/' element={currentUser ? <Navigate to="/account" /> : <LoginPage/>} />
      ​<Route exact path='/account/*' element={currentUser ? <AccountPage /> : <Navigate to="/" />}>

      </Route>
    </Routes>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkCurrentUser:() => dispatch(checkCurrentUser()),
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
