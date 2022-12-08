import React from 'react';
import './Services.css';
import computer from '../../images/services/computer_basics.png';
import office from '../../images/services/office_program.jpg';
import web from '../../images/services/web_development.png';
import graphics from '../../images/services/graphics_design.jpg';
import digitalM from '../../images/services/digital_marketing.jpg';
import videoEdit from '../../images/services/video_editing.jpg';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div id='services' className='service-main py-5'>
            <div className='container my-5'>
                <div className='d-flex justify-content-center mb-5 pb-4'>
                    <h1 className='text-center fw-bold service-title default-color'>আমাদের কোর্সসমুহ</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="service-card card h-100">
                            <img src={computer} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Computer Basics & Fundamentals</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='see-details-btn' to="/webDev">See Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card card h-100">
                            <img src={office} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Office Program & Internet</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='see-details-btn' to="/webDev">See Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card card h-100">
                            <img src={web} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Web Develpoment</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='see-details-btn' to="/webDev">See Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card card h-100">
                            <img src={digitalM} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Digital Marketing</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='see-details-btn' to="/webDev">See Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card card h-100">
                            <img src={graphics} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Graphics Design</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='see-details-btn' to="/webDev">See Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-card card h-100">
                            <img src={videoEdit} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Video Editing</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='see-details-btn' to="/webDev">See Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
