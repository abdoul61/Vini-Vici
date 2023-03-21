import React from 'react';

import "./Card.css";

const Card = ({handleOnClick,url,weight,lifeSpan,group}) =>{
  return (
		<div className="card">
			<img className="im" src={url}/>
			<div className="buttons">
				<button>Group: {group}</button>
				<button>{weight} lbs</button>
				<button>{lifeSpan}</button>
			</div>
		</div>
		);
}


export default Card;
