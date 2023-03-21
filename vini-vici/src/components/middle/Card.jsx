import React from 'react';

import "./Card.css";

const Card = ({addGroup,addW,addA,url,weight,lifeSpan,group}) =>{
  return (
		<div className="card">
			<img className="im" src={url}/>
			<div className="buttons">
				<button onClick={addGroup}>Group: {group}</button>
				<button onClick={addW}>{weight} lbs</button>
				<button onClick={addA}>{lifeSpan}</button>
			</div>
		</div>
		);
}


export default Card;
