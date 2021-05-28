import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import React, { useState, useEffect } from 'react'
// import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
// import Typepage from './TypePage';
// import Login from './Login'
// import { auth } from './firebase';
// import { login, logout, selectUser } from './userSlice'
// import { useDispatch, useSelector } from 'react-redux'

function App() {
  // const user = useSelector(selectUser)
  // const user = {
  //   name: 'Ritik'
  // };
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     if (userAuth) {
  //       // Loggeg in
  //       console.log(userAuth);
  //       dispatch(login({
  //         uid: userAuth.uid,
  //         emial: userAuth.email,
  //       }))
  //     }
  //     else {
  //       // Logged out
  //       dispatch(logout);
  //     }
  //   });
  //   return unsubscribe;
  // })
  // const [{ user }, dispatch] = useStateValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser => {
  //     console.log('User is ', authUser.providerData[0].email);
  //     if (authUser) {
  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser,
  //       })
  //     }
  //     else {
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null,
  //       })
  //     }
  //   });
  // }, []);
  return (
    <Router >
      <div className="App">
        {/* {user === null ? <Login /> : */}
        {/* <div > */}
        {/* <Route path="/"> */}
        <Navbar />
        <Home />
        {/* </Route> */}
        {/* </div> */}
        {/* } */}
      </div>
    </Router>
  );
}
export default App;
