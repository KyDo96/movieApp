import React,{useEffect} from 'react'
import Carousel from '../../../components/HomePage/Carousel'
import {actApiListPhim,actApiRap} from './modules/action'
import {connect} from 'react-redux'
import Loader from '../../../Layout/Loader'
import ListPhim from '../../../components/HomePage/ListPhim'
import ListRap from '../../../components/HomePage/ListRap'
function HomePage(props) {
    useEffect(() => {
        props.callApiListPhim();
        props.callApiRap()
    }, [])
    return (
        <div>
            {props.loading?<Loader/>:
            (
            <div>
            <Carousel pushMethod={props.route.history.push}/>
            <ListPhim/>
            <ListRap pushMethod={props.route.history.push}/>
            </div>
            )
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        callApiListPhim:()=>{
            dispatch(actApiListPhim())
        },
        callApiRap:()=>{
            dispatch(actApiRap())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
