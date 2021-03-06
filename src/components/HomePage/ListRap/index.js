import React,{Component} from 'react'
import './ListRap.scss'
import {connect} from 'react-redux'
import actApiListRap from './modules/action'
import Loader from './../../../Layout/Loader'
class ListRap extends Component {
    constructor(props){
        super(props)
        this.state={
            indexCumRap:0
        }
    }
    changeLichChieu=(index)=>{
        this.setState({
            indexCumRap:index
        })
    }
    renderHeThongRap=(array)=>{
        if(array){
            return array.map((item,index)=>{
                let myClass='nav-link';
                if(index===0){myClass='active nav-link'}
                return <button className={myClass}
                onClick={()=>{
                    this.setState({indexCumRap:0});
                    this.props.getListCumRap(item.maHeThongRap)}}
                data-toggle="pill"
                key={index}
                ><img src={item.logo} alt=''/></button>
            })
        }
    }
    renderCumRap=(array)=>{
        if(array){
            return array.map((item,index)=>{
                let myClass='nav-link';
                if(index===0){myClass='active nav-link'}
                return <button className={myClass} 
                 data-toggle="pill"
                 key={index}
                 onClick={()=>{this.changeLichChieu(index)}}
                ><p className='text-success font-weight-bolder m-0'>{item.tenCumRap}</p>
                <span style={{fontSize:14}}>{item.diaChi}</span></button>
                
            })
        }
    }
    renderLichChieu=(array)=>{
        console.log(array)
        if(array){
            return array.map((item,index)=>{
                let myClass='nav-link';
                if(index===0){myClass='active nav-link'}
                return <button className={myClass} 
                 data-toggle="pill"
                 key={index}
                 style={{cursor:'default'}}
                 >
                    <div className='row m-0'>
                    <img className='col-2' src={item.hinhAnh} alt=''></img>
                    <div className='col-10'>
                    <p className=' font-weight-bolder m-0'>
                    {item.tenPhim}</p>
                        {item.lstLichChieuTheoPhim.map((item,index)=>{
                            const ngayChieu=new Date(item.ngayChieuGioChieu).toLocaleDateString();
                            const gioChieu=new Date(item.ngayChieuGioChieu).toLocaleTimeString();
                            return (
                                <button className='btn btn-success m-1'
                                onClick={()=>{this.props.pushMethod(`./phongve`)}}
                                >
                                    {gioChieu}
                                    <br/>
                                    {ngayChieu}
                                </button>
                            )
                        })}
                    </div>
                    </div>
                </button>
                
            })
        }
    }
    render() {
        return (
            <div>
            <div className='bg_list_rap container p-0'>
            </div>
            <div className='list_rap container p-0'>
                {this.props.loading?(
                <div>
                    <Loader/>
            <br/>
            <h4 className='text-center'>Loading...</h4></div>):
                this.props.listHeThongRap&&this.props.listCumRap?
                (<div className="row m-0">
                        <div className="tab1 nav flex-column">
                            {this.renderHeThongRap(this.props.listHeThongRap)}
                        </div>
                        <div className="tab2 col-4 nav flex-column">
                        {this.props.loadingCumRap?(
                <div style={{marginTop:'200px'}}>
                    <Loader/>
            <br/>
            <h4 className='text-center'>Loading...</h4></div>):
                        this.props.listCumRapClick?
                        this.renderCumRap(this.props.listCumRapClick[0].lstCumRap):
                        this.props.errCumRap?
                        <h4 className='text-center'>Xảy ra lỗi,vui lòng thử lại</h4>:
                        this.renderCumRap(this.props.listCumRap[0].lstCumRap)
                        }
                        </div>
                        <div className="tab3 nav flex-column">
                        {this.props.loadingCumRap?(
                <div style={{marginTop:'200px'}}>
                    <Loader/>
            <br/>
            <h4 className='text-center'>Loading...</h4></div>):
                        this.props.listCumRapClick?
                        this.renderLichChieu(this.props.listCumRapClick[0].lstCumRap[this.state.indexCumRap].danhSachPhim):
                        this.props.errCumRap?
                        <h4 className='text-center'>Xảy ra lỗi,vui lòng thử lại</h4>:
                        this.renderLichChieu(this.props.listCumRap[0].lstCumRap[this.state.indexCumRap].danhSachPhim)
                        }
                        </div>
                </div>):<h4 className='text-center'>Xảy ra lỗi,vui lòng thử lại</h4>}
            </div>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getListCumRap:(maHeThongRap)=>{
            dispatch(actApiListRap(maHeThongRap))
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        listHeThongRap:state.homePageReducer.dataListHeThongRap,
        listCumRap:state.homePageReducer.dataListCumRap,
        listCumRapClick:state.listRapReducer.data,
        loading:state.homePageReducer.loadingRap,
        loadingCumRap:state.listRapReducer.loading,
        errCumRap:state.listRapReducer.err
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListRap)