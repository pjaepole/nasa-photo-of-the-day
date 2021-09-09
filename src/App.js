import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY } from './constants';
import Picture from "./components/picture";
import Title from "./components/title";
import Date from "./components/date";
import Explanation from "./components/explanation";



function App() {
    
    const [picture, setPicture]=useState([]);
    const [title, setTitle]=useState([]);
    const [date, setDate]=useState([]);
    const [explanation, setExplanation]=useState([]);



    
    
    //getting response.data and  passing data to each component
    useEffect(()=>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res=>{
        console.log('this is api data we are getting',res.data);
        setPicture(res.data.url);
        setTitle(res.data.title);
        setDate(res.data.date);
        setExplanation(res.data.explanation);
      }).catch(err=>console.error(err));
    },[])
    
    
    
    
    
    



  return (
    <div className="App">
      <h1>
        APOD<span role="img" aria-label='go!'>🚀</span>!
      </h1>
      
      <Title title={title}/>
      <Picture picture={picture} />
      <Date date={date}/>
      <Explanation explanation={explanation}/>
      
    </div>
  );
}

export default App;
