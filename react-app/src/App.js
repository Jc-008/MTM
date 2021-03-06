import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import SplashPage from "./components/SplashPage"
import Footer from './components/Footer'
import BusinessOwnerLogin from "./components/BusinessOwnerLogin";
import SignUpPage from "./components/SignupPage";
import UserHomePage from './components/UserHomePage';
import UserMemberShipPage from "./components/UserMemberShipPage";
import GymPages from "./components/GymPages";
import ClassPages from "./components/ClassPages";
import { authenticate } from "./store/session";
import AddGymForm from "./components/AddGymForm";

function App() {
  const user = useSelector(state => state.session.user)
  const loaded = useSelector(state => state.session.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>

        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>

        <Route path="/business-owner-login" exact={true}>
          <BusinessOwnerLogin />
        </Route>

        <Route path="/sign-up" exact={true}>
          <SignUpPage />
        </Route>

        <Route path="/search" exact={true}>
          <UserHomePage />
        </Route>

        {/* <Route path="/results" exact={true}>
          < />
        </Route> */}
        <Route path="/membership" exact={true}>
          <UserMemberShipPage />
        </Route>

        <Route path="/gyms/:id" exact={true}>
          <GymPages />
        </Route>

        <Route path="/classes/:id" exact={true}>
          <ClassPages />
        </Route>

        <Route path="/add-gym" exact={true}>
          <AddGymForm />
        </Route>
        {/*
        <ProtectedRoute path="/users" exact={true} >
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute> */}

        {/* <ProtectedRoute path="/" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute> */}

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
