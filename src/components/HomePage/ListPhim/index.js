import React from "react";
import CarouselListPhim from "./CarouselListPhim";
import './ListPhim.scss'
import {connect} from 'react-redux'
import actApi from './modules/action'
function ListPhim(props) {
  const renderListSapChieu=()=>{
      if(props.listPhimSapChieu===null){
        props.listPhimCallApi()
      }
  }
  return (
        <div className="container p-0 list_phim">
        <ul className="nav nav-tabs">
            <li className="active">
            <a data-toggle="tab" className='active' href="#dangChieu">
                Đang chiếu
            </a>
            </li>
            <li>
            <a onClick={renderListSapChieu} data-toggle="tab" href="#sapChieu">
                Sắp chiếu
            </a>
            </li>
        </ul>
        <div className="tab-content">
            <div id="dangChieu" className="tab-pane fade in active show">
            <CarouselListPhim idListPhim='phimDangChieu' hrefForArrow='#phimDangChieu' listPhim={props.listPhimDangChieu}/>
            </div>
            <div id="sapChieu" className="tab-pane fade">
                {props.loading?<h4>Loading...</h4>:
            <CarouselListPhim idListPhim='phimSapChieu' hrefForArrow='#phimSapChieu' listPhim={props.listPhimSapChieu}/>
                }
            </div>
        </div>
        </div>
  );
}
const mapStateToProps=(state)=>{
    return{
        listPhimDangChieu:state.homePageReducer.dataListPhim,
        listPhimSapChieu:state.listFilmReducer.data,
        loading:state.listFilmReducer.loading
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        listPhimCallApi:()=>{
            dispatch(actApi(dispatch))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListPhim)