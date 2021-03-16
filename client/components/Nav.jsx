
import React, { useState } from 'react'
import { Link } from "react-router-dom";


function Landing() {

	const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible(currentBurgerState => {
      return !currentBurgerState
    })
  }

	return (
		<>
			<nav className="navbar">
				<div className="navbar-brand">
        <span onClick={toggleBurger} className={`navbar-burger burger ${burgerVisible ? 'is-active' : ''}`} data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>

		
					<a className="navbar-item" href="#">HOME</a>
				</div>

				<div className={`navbar-menu ${burgerVisible ? "is-active" : ''}`}>
					<div className="navbar-end">
						<Link className="navbar-item" to='/bakeries'>BAKERIES</Link>						<a className="navbar-item">REVIEWS</a>
						<a className="navbar-item">PROFILE</a>
						<a className="navbar-item">LOGOUT</a>
					</div>
				</div>
			</nav>
		</>

	)
}
export default Landing