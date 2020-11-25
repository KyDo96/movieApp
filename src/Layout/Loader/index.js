import React from 'react'
import './style.css'
import styled from 'styled-components'
const Loading = styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid ${props=>props.primary?"green":"blue"};
width: 70px;
height: 70px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;
margin:20px auto
`
export default function Loader() {
    return (
            <Loading ></Loading>
    )
}
