import React,{useState} from 'react'
import {connect} from 'react-redux'
import ModalVideo from 'react-modal-video'
import './InfoDetailsPage.scss'
function InfoDetialsPage(props) {
    const [isOpen, setOpen] = useState(false);
    const findVideoId=()=>{
        const {trailer}={...props.phim}
        return trailer.substr(trailer.search("embed/")+6)
    }
    const videoId=findVideoId()
    return (
        <div className="Info">
            <div style={{backgroundImage:`url(${props.phim.hinhAnh})`}} className="Info__backGround">
            </div>
            <div className="Info__cover">
            </div>
            <div className="Info__content card mb-3" >
                <div className="row no-gutters">
                    <div className="Info__img col-md-4">
                        <img src={props.phim.hinhAnh} className="card-img" alt="..." />
                        <div className="play_video">
                            <a onClick={() => setOpen(true)}>
                                <img src='/assets/img/play-video.png' />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8">
                         <div className="card-body">
                            <p className="card-text">{new Date(props.phim.ngayKhoiChieu).toLocaleDateString()}</p>
                            <h3 className="card-title">{props.phim.tenPhim}</h3>
                            <a href="#LichChieu"><button className="mt-4 btn btn-success">Mua vé</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
        </div>
        )
}
const mapStateToProps=(state)=>{
    return {
        phim:state.detailPageReducer.data
    }
}
export default connect (mapStateToProps)(InfoDetialsPage)
