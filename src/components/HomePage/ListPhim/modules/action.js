import {
    LIST_FILM_REQUEST,
    LIST_FILM_SUCCESS,
    LIST_FILM_FAILED
} from './constants'
import Axios from 'axios'
const actApi=(dispatch)=>{
    return ()=>{dispatch(actListFilmRequest());
        Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10',
            method:'GET'
        })
        .then((r)=>{dispatch(actListFilmSuccess(r.data))})
        .catch((e)=>{dispatch(actListFilmFailed(e))})
    }
}

const actListFilmRequest=()=>{
    return {
        type:LIST_FILM_REQUEST
    }
}
const actListFilmSuccess=(data)=>{
    return {
        type:LIST_FILM_SUCCESS,
        payload:data
    }
}
const actListFilmFailed=(err)=>{
    return {
        type:LIST_FILM_FAILED,
        payload:err
    }
}

export default actApi