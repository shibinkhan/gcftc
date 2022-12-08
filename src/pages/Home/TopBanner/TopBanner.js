import React from 'react';
import bannerImg from '../../../images/banner-left-img copy.png';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='banner-main d-flex justify-content-center my-5 py-5'>
            <div className="banner px-0 container d-flex justify-content-between row">
                <div className='banner-left col-md-6'>
                    <h1 className='banner-left-title mb-4 fw-bold default-color'>GLOBAL COMPUTERS & FREELANCING TRAINING CENTER.</h1>
                    <h5 className='banner-p'>শূন্য থেকে শুরু করে Computer Fundamentals, Office Programs & Internet, Web Development, Graphics Design, Digital Marketing, Video Editing শিখে নিজের ক্যারিয়ার কে নেক্সট লেভেল এ নিতে চাইলে চাইলে জয়েন করো GCFTC.</h5>
                    <a className='banner-left-button' href="https://docs.google.com/forms/d/e/1FAIpQLSeK2LMFY2rOiAHbnZUMg0i2vH4BltR0yD00TiNUoeyNjhprRw/viewform">Enroll Now</a>
                </div>
                <div className='col-md-5 mt-5 mt-md-4 pt-4 pt-md-0'>
                    <img src={bannerImg} alt="" className='banner-img img-fluid'/>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;