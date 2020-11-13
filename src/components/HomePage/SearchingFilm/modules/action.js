import {
    SEARCHING_FILM_REQUEST,
    SEARCHING_FILM_SUCCESS,
    SEARCHING_FILM_FAILED
} from './constants'
import Axios from 'axios'
const actApi=(dispatch,maPhim)=>{
    return ()=>{dispatch(actSearchingFilmRequest());
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method:'GET'
        })
        .then((r)=>{dispatch(actSearchingFilmSuccess(r.data))})
        .catch((e)=>{dispatch(actSearchingFilmFailed(e))})
    }
}

const actSearchingFilmRequest=()=>{
    return {
        type:SEARCHING_FILM_REQUEST
    }
}
const actSearchingFilmSuccess=(data)=>{
    return {
        type:SEARCHING_FILM_SUCCESS,
        payload:data
    }
}
const actSearchingFilmFailed=(err)=>{
    return {
        type:SEARCHING_FILM_FAILED,
        payload:err
    }
}

export default actApi