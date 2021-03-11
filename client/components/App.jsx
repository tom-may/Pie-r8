import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'


import Landing from './Landing.jsx'
import Nav from './Nav.jsx'

const App = () => {

  return (

    <Router>
      <Route path='/' component={Nav} />
      <Route path='/' component={Landing} />
      

    </Router>

  )
}


export default App
