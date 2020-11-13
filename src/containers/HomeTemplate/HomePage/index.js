import React,{useEffect} from 'react'
import Carousel from '../../../components/HomePage/Carousel'
import actApi from './modules/action'
import {connect} from 'react-redux'
import Loader from './../../../components/Loader'
import ListPhim from '../../../components/HomePage/ListPhim'
function HomePage(props) {

    console.log(props)
    useEffect(() => {
        props.handleCallApi();
    }, [])
    return (
        <div>
            {props.loading?<Loader/>:
            (
            <div>
            <Carousel/>
            <ListPhim/>
            <div className='container'>
            <img className='img-fluid' src='./assets/img/back-ground.png' alt=''/>
            </div>
            <div style={{display:"block",height:500}}></div>
            </div>
            )
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        loading:state.homePageReducer.loading,
        listPhimDangChieu:state.homePageReducer.data
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleCallApi:()=>{
            dispatch(actApi(dispatch))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
