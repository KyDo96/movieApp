import React,{useState} from 'react'
import './searchingFilm.scss'
import {connect} from 'react-redux'
import actApi from './modules/action'
function SearchingFilm(props) {
    const [state,setState]=useState({rap:null,ngayXem:null,suatChieu:null});
    const renderListPhim=()=>{
        if(props.listPhimDangChieu){
            return props.listPhimDangChieu.map((item)=>{
                return <option key={item.maPhim} value={item.maPhim}>{item.tenPhim}</option>
            })
        }
    }
    const renderListRap=()=>{
        if(props.loadingRap){
            return <option disabled>Loading...</option>
        }
        if(props.listRap){
            return props.listRap.heThongRapChieu.map((item)=>{
                return item.cumRapChieu.map((item,index)=>{
                    return <option key={index} value={JSON.stringify(item)}>{item.tenCumRap}</option>
                })
            })
        }
        return <option disabled>Vui lòng chọn Phim</option>
    }
    const renderNgayXem=()=>{
        
        if(state.rap){
            const rap=JSON.parse(state.rap);
            const ngayChieuArray=rap.lichChieuPhim.filter((item,index)=>{
                const ngayChieu=new Date(item.ngayChieuGioChieu).toLocaleDateString();
                return rap.lichChieuPhim.findIndex((item)=>new Date(item.ngayChieuGioChieu).toLocaleDateString()===ngayChieu)===index
            })
            return ngayChieuArray.map((item,index)=>{
                    return <option key={index} value={new Date(item.ngayChieuGioChieu).toLocaleDateString()}>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</option>
            })
        }
        return <option disabled>Vui lòng chọn Phim và Rạp</option>
    }
    const renderSuatChieu=()=>{
        
        if(state.ngayXem){
            console.log(state.ngayXem);
            const rap=JSON.parse(state.rap);
            const suatChieuArray=rap.lichChieuPhim.filter((item,index)=>{
                return new Date(item.ngayChieuGioChieu).toLocaleDateString()===state.ngayXem;
            })
            return suatChieuArray.map((item,index)=>{
                    return <option key={index} value={item.maLichChieu}>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</option>
            })
        }
        return <option disabled>Vui lòng chọn Phim, Rạp và Ngày xem</option>
    }
    const handleOnChangeTenPhim=(e)=>{
        const {value}=e.target;
        props.searchingPhimCallApi(value);
    }
    const handleOnChange=(e)=>{

        const {name,value}=e.target;
        setState({...state,[name]:value})
    }
    return (
        <div className='searchingMovie container'>
            <div style={{flexWrap:"nowrap"}} className='row m-0'>
            <select className='listFilm' onChange={handleOnChangeTenPhim} style={{width:'30%'}} className="selectBox form-control" >
                    <option value='' selected hidden> Phim </option>
                    {renderListPhim()}
            </select>
            <select name='rap' onChange={handleOnChange} style={{width:'calc(70%/4)'}} className="selectBox form-control" >
                    <option value='' selected hidden> Rạp </option>
                    {renderListRap()}
            </select>
            <select name='ngayXem' onChange={handleOnChange} style={{width:'calc(70%/4)'}} className="selectBox form-control" >
                    <option value='' selected hidden> Ngày xem</option>
                    {renderNgayXem()}
            </select>
            <select name='suatChieu' onChange={handleOnChange} style={{width:'calc(70%/4)'}} className="selectBox form-control" >
                    <option value='' selected hidden> Suất chiếu </option>
                    {renderSuatChieu()}
            </select>
            <div style={{paddingLeft:'10px',paddingRight:'10px',width:'calc(70%/4)'}}>
            <button style={{height:'40px',width:'100%'}} className='btn btn-secondary'>Mua vé ngay</button>
            </div>
            </div>
        </div>

    )
}
const mapStateToProps=(state)=>{
    return{
        listPhimDangChieu:state.homePageReducer.dataListPhim,
        loadingRap:state.searchingFilmReducer.loading,
        listRap:state.searchingFilmReducer.data
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        searchingPhimCallApi:(maPhim)=>{
            dispatch(actApi(dispatch,maPhim))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchingFilm)