import React from 'react'

export default function PageNotFound() {
    return (
        <div style={{width:'100%',position:'relative'}} >
            <div style={{width:'100%'}} >
            <img style={{width:'100%'}} src='/assets/img/page-not-found.png'></img>
            </div>
            <div style={{position:'absolute',top:'5%',left:'30%'}} className='text-center text-light'>
                <h1>Sorry, this page is under construction.
                    <br/>
                    Please try later. Thanks
                </h1>
            </div>
        </div>
    )
}
