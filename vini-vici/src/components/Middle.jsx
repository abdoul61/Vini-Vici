import React, {useState} from 'react';
import "./Middle.css"
import Card from './middle/Card';
import Starter from './middle/Starter';

const Middle = () =>{
const [show,setShow] = useState(false);
const handleButtonClick = () =>{
    setShow(true);
	}
	return (
	   <div className="middle">
			<h1 className="title">Vini vici !</h1>
			<div className="main">
			{ !show ?  <Starter/>: <Card/>}
				<button onClick={handleButtonClick}className="button">
					Discover
				</button>
			</div>
		</div>
	)

}


export default Middle;
