import React,{Component} from 'react'
import './ListRap.scss'
import {connect} from 'react-redux'
import {actApiCumRap} from './../../../containers/HomeTemplate/HomePage/modules/action'
import actApiListRap from './modules/action'
class ListRap extends Component {
    renderHeThongRap=(array)=>{
        if(array){
            return array.map((item,index)=>{
                let myClass='nav-link';
                if(index===0){myClass='active nav-link'}
                return <button className={myClass}
                onClick={()=>{this.props.getListCumRap(item.maHeThongRap)}}
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
                ><p className='text-success font-weight-bolder m-0'>{item.tenCumRap}</p>
                <span style={{fontSize:14}}>{item.diaChi}</span></button>
                
            })
        }
    }
    render() {
        return (
            <div>
            <div className='bg_list_rap container p-0'>
            </div>
            <div className='list_rap container p-0'>
                {this.props.loading?<h4 className='text-center'>Loading...</h4>:
                this.props.listHeThongRap&&this.props.listCumRap?
                (<div className="row m-0">
                        <div className="tab1 nav flex-column">
                            {this.renderHeThongRap(this.props.listHeThongRap)}
                        </div>
                        <div className="tab2 col-4 nav flex-column">
                        {this.props.loadingCumRap?<h4 className='text-center'>Loading...</h4>:
                        this.props.listCumRapClick?
                        this.renderCumRap(this.props.listCumRapClick):
                        this.props.errCumRap?
                        <h4 className='text-center'>Xảy ra lỗi,vui lòng thử lại</h4>:
                        this.renderCumRap(this.props.listCumRap)
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