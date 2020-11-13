import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import './../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

export default function ItemInList(props) {
   const [isOpen, setOpen] = useState(false)
  return (
    <div className="item_in_list col-3">
      <div>
        <div style={{ position: "relative" }}>
          <img className="img-fluid" src={props.phim.hinhAnh}></img>
          <div className="play_video">
            <a onClick={()=> setOpen(true)}>
              <img src='./assets/img/play-video.png'/>
            </a>
            
          </div>
          <NavLink to="/sdcsdc" className="overlay">
            <div className="backGround"></div>
            <div className="button">MUA VÉ</div>
          </NavLink>
        </div>
        <h5>{props.phim.tenPhim}</h5>
      </div>
      
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nxx1_RAx31o" onClose={() => setOpen(false)} />
    </div>
    
  );
}
