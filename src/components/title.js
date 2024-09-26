import React, { useState, useEffect } from 'react'
import { API_KEY } from '../constants'
import axios from 'axios'
import styled from 'styled-components';

const StyledTitle=styled.div`
    border: 5px solid black;
    margin: 2% 25%; 
    font-weight:bold;

`

export default function Title(props){
        const {title}= props;








    return(
        <StyledTitle>
            <h1>Title: {title}</h1>
        </StyledTitle>


    )
}