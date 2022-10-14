import React from 'react';
import bannerImg from '../../../images/banner-left-img copy.png';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='banner-main'>
            <div className="banner">
                <div className='banner-left'>
                    <h1 className='banner-left-title'>Global Computers & Freelancing Training Center.</h1>
                    <p>শূন্য থেকে শুরু করে Computer Fundamentals, Office Programs, Web Development, Graphics Design & Digital Marketing শিখে নিজের ক্যারিয়ার কে নেক্সট লেভেল এ নিতে চাইলে চাইলে জয়েন করো GCFTC.</p>
                    <button className='banner-left-button'>Join Now</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" className='banner-img img-fluid'/>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;