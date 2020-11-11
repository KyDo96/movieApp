import React from 'react'
import './searchingFilm.scss'
export default function SearchingFilm() {
    return (
        <div className='searchingMovie'>
            <div style={{flexWrap:"nowrap"}} className='row m-0'>
            <select style={{width:'30%'}} className="selectBox form-control" >
                    <option value='' selected hidden> Phim </option>
            </select>
            <select style={{width:'calc(70%/4)'}} className="selectBox form-control" >
                    <option value='' selected hidden> Rạp </option>
            </select>
            <select style={{width:'calc(70%/4)'}} className="selectBox form-control" >
                    <option value='' selected hidden> Ngày xem</option>
            </select>
            <select style={{width:'calc(70%/4)'}} className="selectBox form-control" >
                    <option value='' selected hidden> Xuất chiếu </option>
            </select>
            <div style={{paddingLeft:'10px',paddingRight:'10px',width:'calc(70%/4)'}}>
            <button style={{height:'40px',width:'100%'}} className='btn btn-secondary'>Mua vé ngay</button>
            </div>
            </div>
        </div>

    )
}

