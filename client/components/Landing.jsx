
import React from "react";

function Landing() {
	return (
        <>
					<section className="hero is-white is-fullheight">
						<div className="hero-body">
							<div className="container">
								<div className="columns  is-vcentered reverse-columns">
									<div className="column
										is-10-mobile is-offset-1-mobile
										is-10-tablet is-offset-1-tablet
										is-5-desktop is-offset-1-desktop
										is-5-widescreen is-offset-1-widescreen
										is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
										<h1 className="title titled is-1 mb-6">Pie r8</h1>
										<h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
											Which Bakery really is the best?</h2>
											<h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
											 Find out on New Zealands only peer-to-peer Pie rating website.
										</h2>
										<div className="buttons">
											<button className="button is-warning">Login</button>
											<button className="button is-warning">Register</button>
										</div>
									</div>
									<div data-aos="fade-right" className="column
										is-10-mobile is-offset-1-mobile
										is-10-tablet is-offset-1-tablet
										is-4-desktop is-offset-1-desktop
										is-4-widescreen is-offset-1-widescreen
										is-4-fullhd is-offset-1-fullhd">
										<figure className="image ">
											<img className="is-rounded" src="./images/LandingPie.jpg" alt="a tasty pie"></img>
										</figure>
									</div>

								</div>
							</div>
						</div>
  				</section>
        </>

    )
}
export default Landing