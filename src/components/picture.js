import React, { useState, useEffect } from 'react'
import { API_KEY } from '../constants'
import axios from 'axios'
import styled from 'styled-components';

const StyledImage=styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    border: 1px solid black;
`


export default function Picture(props){
    const {picture}= props;
    const [pictureOn, setPictureOn]=useState(true);
    const togglePicture= () =>{
        setPictureOn(!pictureOn);
    };

    
  
    return(
           <StyledImage>
            <button id='togglePicture' onClick={togglePicture}>{pictureOn ? 'hide' : 'show'} picture</button>
            {pictureOn&& <img src={picture}/>}
           </StyledImage>
                
        )

}