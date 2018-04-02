import React from 'react'
import { BrowserRouter as ReactRouter, Route } from "react-router-dom";

import AppContainer from './app-container'
import LandingPage from './landing-page/landing-page'
import HomeContainer from './home-container'
import ExerciceContainer from './workouts/exercice-container'
import Bottombar from './bottombar/bottombar'
import WorkoutContainer from './workouts/workout-container'

function Router() {
  return (
    <ReactRouter>
      <div>
        <Route component={AppContainer} />
        <Route component={LandingPage} exact path="/" />
        <Route component={HomeContainer} path="/workouts" />
        <Route component={WorkoutContainer} path="/workout/:id"/>
        <Route component={ExerciceContainer} path="/create-exercice"/>
        <Route component={Bottombar} />
      </div>
    </ReactRouter>
  )
}

export default Router
