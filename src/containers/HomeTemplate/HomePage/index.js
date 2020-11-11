import React from 'react'
import Carousel from '../../../components/HomePage/Carousel'

export default function HomePage(props) {
    console.log(props)
    return (
        <div>
            <Carousel/>
            <div style={{display:"block",height:500}}></div>
        </div>
    )
}
