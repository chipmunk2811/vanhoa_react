import React from 'react'
import './style.css'

export default function Songnuoc() {
    return (
        <div className='songnuoc'>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="la.jpg" alt="Los Angeles" />
                    </div>
                    <div className="item">
                        <img src="chicago.jpg" alt="Chicago" />
                    </div>
                    <div className="item">
                        <img src="ny.jpg" alt="New York" />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}
