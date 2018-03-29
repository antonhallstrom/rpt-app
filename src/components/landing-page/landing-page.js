import React from 'react'
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      Landing Page
      <Link to="/sign-up">
        <button>Sign up</button>
      </Link>
    </div>
  )
}

export default LandingPage
