import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbarHome.scss'
export default function index() {
    return (
        <div className='navbarHome row m-0 justify-content-md-between align-items-center py-1'>
            <Link to='/'> <img src='./assets/img/web-logo.png' alt=''/></Link>
                <ul className='row'>
                    <li>
                        <NavLink to='/#lich_chieu' >Lịch chiếu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/#cum_rap' >Cụm rạp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/#cum_rap' >Tin tức
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/#cum_rap' >Ứng dụng
                        </NavLink>
                    </li>
                </ul>
            <div className='mr-4'>
            <button className='mr-3 btn btn-success'>Đăng ký</button>
            <button className='btn btn-danger'>Đăng nhập</button>
            </div>
        </div>
    )
}
