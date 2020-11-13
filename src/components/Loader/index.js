import React from 'react'
import './style.css'
import styled from 'styled-components'
const Loading = styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid ${props=>props.primary?"green":"blue"};
width: 120px;
height: 120px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;

position: fixed;
top:45%;
left:47%;
`
export default function Loader() {
    return (
            // <div class="loader"></div>
            <div className='backGroundLoader'>
            <Loading primar></Loading>
            </div>
    )
}
