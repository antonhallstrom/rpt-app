import React from 'react'
import { BrowserRouter as ReactRouter, Route } from "react-router-dom";

import AppContainer from './app-container'
import LandingPage from './landing-page/landing-page'
import Workout from './workouts/workout'
import Topbar from './topbar/topbar'
import ExerciceContainer from './workouts/exercice-container'

function Router() {
  return (
    <ReactRouter>
      <div>
        <Route component={Topbar} />
        <Route component={AppContainer} />
        <Route component={LandingPage} exact path="/" />
        <Route component={Workout} path="/workouts" />
        <Route component={ExerciceContainer} path="/exercice/:id"/>
      </div>
    </ReactRouter>
  )
}

export default Router
