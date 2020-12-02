import Axios from 'axios'

const getListPhimApi=()=>{
    return Axios({
        url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05',
        method:'GET'
    })
}
const getListHeThongRapApi=()=>{
    return Axios({
        url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
        method:'GET'
    })
}
const getListCumRapApi=(maHeThongRap)=>{
    return Axios({
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
        method:'GET'
    })
}
const getDetailPhim=(maPhim)=>{
    return Axios({
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method:'GET'
    })
}
export {getListPhimApi,getListHeThongRapApi,getListCumRapApi,getDetailPhim}