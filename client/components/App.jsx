import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { checkAuth } from '../actions/auth'
import Landing from './Landing.jsx'
import Nav from './Nav.jsx'

function App({ auth, dispatch }) {

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])


  return (

    <Router>
      <Route path='/' component={Nav} />
      <Route path='/' component={Landing} />
      

    </Router>

  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
