import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Trangchu() {
    return (
        <section className="carousel">
            <div id="demo" className="carousel slide" data-ride="carousel" data-interval={3000}>
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                    <li data-target="#demo" data-slide-to={3} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="carousel-caption">
                                <h3>Phong Tục</h3>
                                <NavLink to="/phongtuc"> <i className="las la-paper-plane" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="carousel-caption ml-fix">
                                <h3>Tín Ngưỡng</h3>
                                <NavLink to="/tinnguong"> <i className="las la-paper-plane" /></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay"> </div>
                        <div className="container-fluid">
                            <div className="carousel-caption">
                                <h3>Nghệ Thuật</h3>
                                <NavLink to="/nghethuat"> <i className="las la-paper-plane" /></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="overlay"> </div>
                        <div className="container-fluid">
                            <div className="carousel-caption ml-fix">
                                <h3>Giáo Dục</h3>
                                <NavLink to="/giaoduc"> <i className="las la-paper-plane" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
