import React from 'react';

import "./Card.css";

const Card = () =>{
  return (
		<div className="card">
			<img className="im" src=" https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"/>
			<div className="buttons">
				<button>Siberian</button>
				<button>8-16 lbs</button>
				<button>Russia</button>
			</div>
		</div>
		);
}


export default Card;
