import React from "react";
import {connect} from 'react-redux'
import ItemInList from "./ItemInList";
function CarouselListPhim(props) {
    const renderSlide=(arrayListPhim)=>{
        
        let arraySlide=[];
        if(arrayListPhim){
        const SO_ITEM_1_SLIDE=8;
        const soSlide=Math.ceil(arrayListPhim.length/SO_ITEM_1_SLIDE)
        
       for(let i=0;i<soSlide;i++){
           if(i===0){
            arraySlide.push(
                <div className="carousel-item active">
                    <div className='row m-0'>
                    {arrayListPhim.map((item,index)=>{
                        if(index>=i*SO_ITEM_1_SLIDE&&index<i*SO_ITEM_1_SLIDE+8){
                        return <ItemInList key={index} phim={item}/>
                        }
                    })}
                    </div>
                </div>
            )
           }
           else{
            arraySlide.push(
                <div className="carousel-item">
                    <div className='row m-0'>
                    {arrayListPhim.map((item,index)=>{
                        if(index>=i*SO_ITEM_1_SLIDE&&index<i*SO_ITEM_1_SLIDE+8){
                        return <ItemInList key={index} phim={item}/>
                        }
                    })}
                    </div>
                </div>
            )
           }
       } 
    }
       return arraySlide;
    }
  return (
            <div
            id={props.idListPhim}
            className="carousel slide"
            data-interval={false}
            >
            <div className="carousel-inner">
                {renderSlide(props.listPhim)}
            </div>
            <a
                className="arrow_list_phim carousel-control-prev"
                href={props.hrefForArrow}
                role="button"
                data-slide="prev"
            >
                <i class="fa fa-angle-left"></i>
            </a>
            <a
                className="arrow_list_phim carousel-control-next"
                href={props.hrefForArrow}
                role="button"
                data-slide="next"
            >
                <i class="fa fa-angle-right"></i>
            </a>
            </div>
  );
}
const mapStateToProps=(state)=>{
    return{
    }
}
export default connect(mapStateToProps)(CarouselListPhim)