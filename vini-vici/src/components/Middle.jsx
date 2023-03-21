import React, {useState,useEffect} from 'react';
import "./Middle.css"
import Card from './middle/Card';
import Starter from './middle/Starter';
import axios from 'axios';


const Middle = () =>{
const [dta,setData] = useState(null);
const [show,setShow] = useState(false);
const [index,setIndex] = useState(0);
const [name,setName] = useState('');

const handleButtonClick = () =>{
    setShow(true);
		const randomIn = getRandom(dta.length);
		setIndex(randomIn);
		setName(dta[index].breeds[0].name)
	  getData();	
	}


const key = import.meta.env.VITE_API;
//console.log(key);
const URL = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=true&include_breeds=true&include_categories=true&api_key=${key}`;

const getRandom = (lngth)=>{
		return Math.floor(Math.random() *lngth);
	}
const getData = async () =>{
	 const response = await axios.get(URL);	
	 // console.log(response.data[index].url);
	 const data_url = response.data;
	 setData(data_url);
	}
	
useEffect(()=>{
		getData();
	},[])


// console.log(dta);
	return (
	   <div className="middle">
			<h1 className="title">{name === " "? "Dog Lover!":name}</h1>
			<div className="main">
			{ !show ?  <Starter/>:
					<Card
						url={dta && dta[index].url}
						weight={dta && dta[index].breeds[0].weight.metric }
						group={dta && dta[index].breeds[0].breed_group}
						lifeSpan={dta && dta[index].breeds[0].life_span }


				/>}
				<button onClick={handleButtonClick}className="button">
					Discover
				</button>
			</div>
		</div>
	)

}


export default Middle;
