import React, { useState, useEffect } from 'react'
import { API_KEY } from '../constants'
import axios from 'axios'

export default function Picture(props){
    const {picture}= props;
    const [pictureOn, setPictureOn]=useState(true);
    const togglePicture= () =>{
        setPictureOn(!pictureOn);
    };

    
  
    return(
           <div>
            <button id='togglePicture' onClick={togglePicture}>{pictureOn ? 'hide' : 'show'} picture</button>
            {pictureOn&& <img src={picture}/>}
           </div>
                
        )

}