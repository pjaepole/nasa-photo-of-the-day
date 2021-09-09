import React, { useState, useEffect } from 'react'
import { API_KEY } from '../constants'
import axios from 'axios'
import styled from 'styled-components';

const StyledExplanation=styled.div`
    border: 3px solid black;
 
    margin:auto;
    margin-top:2%;
    width:50%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    opacity:85%;
`

export default function Explanation(props){
    const {explanation} =props;




    return(
        <StyledExplanation>
            <p>Explanation</p>
            <p>{explanation}</p>
        </StyledExplanation>

    )


}