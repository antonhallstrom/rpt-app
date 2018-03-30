import React from 'react'
import { BrowserRouter as ReactRouter, Route } from "react-router-dom";

import AppContainer from './app-container'
import SignUpContainer from './sign-up/sign-up-container'
import LandingPage from './landing-page/landing-page'

function Router() {
  return (
    <ReactRouter>
      <div>
        <Route component={AppContainer} exact path="/" />
        <Route component={LandingPage} exact path="/" />
        <Route component={SignUpContainer} path="/sign-up" />
      </div>
    </ReactRouter>
  )
}

export default Router
