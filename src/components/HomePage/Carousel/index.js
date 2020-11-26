import React from 'react'
import SearchingFilm from '../SearchingFilm'
import './carousel.scss'
export default function Carousel(props) {
    return (
        <div>
        <div id="carouselMovie" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselMovie" data-slide-to={0} className="indicatorMovie active" />
                    <li data-target="#carouselMovie" data-slide-to={1} className="indicatorMovie"/>
                    <li data-target="#carouselMovie" data-slide-to={2} className="indicatorMovie"/>
                    <li data-target="#carouselMovie" data-slide-to={3} className="indicatorMovie"/>
                    <li data-target="#carouselMovie" data-slide-to={4} className="indicatorMovie" />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="./assets/img/carousel-1.jpg" alt="First slide" />
                    <div className='overlayMovie'></div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/img/carousel-2.jpg" alt="Second slide" />
                    <div className='overlayMovie'></div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/img/carousel-3.png" alt="Third slide" />
                    <div className='overlayMovie'></div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/img/carousel-4.png" alt="Third slide" />
                    <div className='overlayMovie'></div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/img/carousel-5.png" alt="Third slide" />
                    <div className='overlayMovie'></div>
                    </div>
                </div>
                <a className="arrowWrapLeft carousel-control-prev" href="#carouselMovie" role="button" data-slide="prev">
                    <span className="arrowMovie carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="arrowWrapRight carousel-control-next" href="#carouselMovie" role="button" data-slide="next">
                    <span className="arrowMovie carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
                
         <SearchingFilm pushMethod={props.pushMethod}/>
         </div>
         </div>
    )
}
