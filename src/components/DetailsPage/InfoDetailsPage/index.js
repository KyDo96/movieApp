import React from 'react'
import {connect} from 'react-redux'
import './InfoDetailsPage.scss'
function InfoDetialsPage(props) {
    return (
        <div className="Info">
            <div style={{backgroundImage:`url(${props.phim.hinhAnh})`}} className="Info__backGround">
            </div>
            <div className="Info__cover">
            </div>
            <div className="Info__content card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.phim.hinhAnh} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                         <div className="card-body">
                            <p className="card-text">{new Date(props.phim.ngayKhoiChieu).toLocaleDateString()}</p>
                            <h3 className="card-title">{props.phim.tenPhim}</h3>
                            <button className="mt-4 btn btn-success">Mua vé</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
const mapStateToProps=(state)=>{
    return {
        phim:state.detailPageReducer.data
    }
}
export default connect (mapStateToProps)(InfoDetialsPage)
