import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron mb-5 mt-5 p-4 bg-light">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit massa, ullamcorper iaculis pellentesque vitae, semper non risus. Praesent a facilisis turpis. Vestibulum id quam enim.</p>
			
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</p>
		</div>
	);
};

export default Jumbotron;
