import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY } from './constants';
import Picture from "./components/picture";
function App() {
    
    const [picture, setPicture]=useState([]);
    const [title, setTitle]=useState([]);
    const [date, setDate]=useState([]);
    const [explanation, setExplanation]=useState([]);



    
    
    //getting picture url
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
      <h2>Title:{title}</h2>
      
      <Picture picture={picture} />
      
      
      <div>date={date}</div>
      <p>explanation:{explanation}</p>
    </div>
  );
}

export default App;
