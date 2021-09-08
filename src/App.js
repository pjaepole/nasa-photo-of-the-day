import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY } from './constants';

function App() {
useEffect(()=>{
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(res=>{
    console.log('this is api data we are getting',res.data);
  }).catch(err=>console.error(err));
},[])





  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>title:</h1>
      <div>date:</div>
      <p>explanation:</p>
      <div>
            <img className='hdPicture' src='https://apod.nasa.gov/apod/image/2109/M31WideField_Ziegenbalg_1400.jpg'></img>
            
      </div>
      <div>
            <img className='regPicture'src='https://apod.nasa.gov/apod/image/2109/M31WideField_Ziegenbalg_960.jpg'></img>  
           
      </div>
    </div>
  );
}

export default App;
