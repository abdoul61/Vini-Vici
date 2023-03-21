import React, {useState,useEffect} from 'react';
import './App.css'
import Card from './components/middle/Card.jsx';
import Starter from './components/middle/Starter.jsx';
import axios from 'axios';


function App() {
const [dta,setData] = useState(null);
const [show,setShow] = useState(false);
const [index,setIndex] = useState(0);
const [name,setName] = useState('');
const [seenData,setSeenData] = useState([]);

const handleButtonClick = () =>{
    setShow(true);
		const randomIn = getRandom(dta.length);
		setIndex(randomIn);
		setName(dta[index].breeds[0].name)
	  getData();	
		let newData = dta[index].breeds[0].name;

		setSeenData([...seenData,newData]);
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

const seendata =seenData.map((elem,index)=>{
		return <h2 key={index}>{elem}</h2>
	})  

	console.log(seenData);




  return (
    <div className="App">
	 		 <div className="left">
				{seendata}
				</div>

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
			<div className="right">
			<h2></h2>
		</div>


   </div>
  )
}

export default App
