import React from "react";
import PropTypes from "prop-types"

//create your first component
const Card = (props) => {

	return (

		<div className="card text-center m-2">
			<img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit massa, ullamcorper.
				</p>
				
			</div>
			<div className="card-footer">
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>

		
	);
};

Card.propTypes = {
	title: PropTypes.string,
	imgUrl: PropTypes.string,
}

export default Card;
