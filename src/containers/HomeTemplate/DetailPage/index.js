import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import actApi from './modules/actions'
import Loader from './../../../Layout/Loader'
import './detailPage.scss'
import InfoDetialsPage from '../../../components/DetailsPage/InfoDetailsPage'
function DetailPage(props) {
    useEffect(() => {
        props.getDetailsFilm(props.route.match.params.id)
    }, [])
    const renderHTML=()=>{
        return (
            <div>
                <InfoDetialsPage/>
            </div>
        )
    }
    return (
        <div>
            {props.phim?renderHTML():<Loader/>}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        phim:state.detailPageReducer.data
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getDetailsFilm:(maPhim)=>{
            dispatch(actApi(maPhim))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailPage)