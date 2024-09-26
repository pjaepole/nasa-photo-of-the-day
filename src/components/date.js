import React, { useState, useEffect } from 'react'
import { API_KEY } from '../constants'
import axios from 'axios'
import styled from 'styled-components';

const StyledDate=styled.div`
    border: 3px solid black;
 
    margin:auto;
    margin-top:2%;
    width:25%;
    display:flex;
    justify-content: center;
    background-color: grey;
    opacity:85%;
`

export default function Date(props){
    const {date} =props;




    return(
        <StyledDate>
            <p>Date={date}</p>
        </StyledDate>

    )


}