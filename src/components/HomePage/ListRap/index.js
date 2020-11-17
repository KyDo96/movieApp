import React,{Component} from 'react'
import './ListRap.scss'
import {connect} from 'react-redux'
class ListRap extends Component {
    renderHeThongRap=(array)=>{
        if(array){
            return array.map((item,index)=>{
                if(index===0){
                return <a className=" active nav-link" id={item.maHeThongRap} data-toggle="pill" href="#v-pills-profile"
                role="tab" aria-controls="v-pills-profile" aria-selected="false" key={index}
                ><img src={item.logo} alt=''/></a>
                }else{
                return <a className=" nav-link" id={item.maHeThongRap} data-toggle="pill" href="#v-pills-profile"
                    role="tab" aria-controls="v-pills-profile" aria-selected="false" key={index}
                    ><img src={item.logo} alt=''/></a>
                }
            })
        }
    }
    renderCumRap=(array)=>{
        if(array){
            return array.map((item,index)=>{
                if(index===0){
                return <a className=" active nav-link" id={item.maHeThongRap} data-toggle="pill" href="#v-pills-profile"
                role="tab" aria-controls="v-pills-profile" aria-selected="false" key={index}
                >{item.tenCumRap}</a>
                }else{
                return <a className=" nav-link" id={item.maHeThongRap} data-toggle="pill" href="#v-pills-profile"
                    role="tab" aria-controls="v-pills-profile" aria-selected="false" key={index}
                    >{item.tenCumRap}</a>
                }
            })
        }
    }
    render() {
        return (
            <div className='list_rap container p-0'>
    {this.props.loading?<h4>Loading...</h4>:
      (<div className="row m-0">
            <div className="tab1 nav flex-column">
                {this.renderHeThongRap(this.props.listHeThongRap)}
            </div>
            <div className="tab2 nav flex-column">
                {this.renderCumRap(this.props.listCumRap)}
            </div>
            
      </div>)}
    </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    }
}
const mapStateToProps=(state)=>{
    return{
        listHeThongRap:state.homePageReducer.dataListHeThongRap,
        listCumRap:state.homePageReducer.dataListCumRap
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListRap)