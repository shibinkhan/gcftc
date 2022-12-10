import React from 'react';
import supportImg from '../../../images/SupportImg.png';
import jobPlacementImg from '../../../images/JobPlacement.png';
import mikeImg from '../../../images/mike.png';
import './SupportJob.css';

function SupportJob() {
    return (
        <div className='supportJob-main'>
            <div className='d-flex justify-content-center'>
                <div className='container row d-flex align-items-center my-5 py-5 px-0'>
                    <div className='col-md-7'>
                        <h2 className='fw-bold default-color mb-4'>আনলিমিটেড সাপোর্ট</h2>
                        <p>যতক্ষণ পর্যন্ত বুঝতে পারবে না ততক্ষণ পর্যন্ত আমরা হেল্প করতেই থাকবো। ২৪ ঘন্টার মধ্যে সব প্রশ্নের উত্তর পাবে। ছুটির দিন বাদে প্রতিদিন ২/৩ বার গুগল হ্যাংআউট এ এসে স্কিনশেয়ার করে প্রবলেম সলভ করতে পারবে। বুঝতে না পারলে লাইভ কন্সেপচুয়াল সেশন পাবে। পিছিয়ে পড়লে স্পেশাল গাইডলাইন এবং কাউন্সেলিং সেশন পাবে। আর কি লাগে!</p>
                    </div>
                    <div className='col-md-5'>
                        <img src={supportImg} alt="" className='img-fluid supJobImg' />
                    </div>
                </div>
            </div>

            {/* JobPlacement */}
            <div className='jobPlacement d-flex justify-content-center'>
                <div className='container row d-flex align-items-center my-5 py-5 px-0'>
                    <div className='col-md-5'>
                        <img src={jobPlacementImg} alt="" className='img-fluid supJobImg' />
                    </div>
                    <div className='col-md-7'>
                        <h2 className='fw-bold default-color mb-4'>বেসিক টু জব প্লেসমেন্ট</h2>
                        <p>যারা সিরিয়াসলি হার্ডওয়ার্ক করবে। ডাটা স্ট্রাকচার, এলগরিদম পর্যন্ত অনটাইমে ভালো ভাবে ফিনিশ করবে তাদেরকে স্পেশাল ইন্টারভিউ ক্র্যাকিং ট্রেনিং দেয়া হবে। তাদের সিভি/রেজুমি পাঠিয়ে দেয়া হবে দেশী/বিদেশী বিভিন্ন কোম্পানিতে।</p>
                    </div>
                </div>
            </div>

            {/* ready to? */}
            <div className='ready-to-main d-flex justify-content-center pt-5'>
                <div className='ready-to container row d-flex justify-content-evenly align-items-center mt-5'>
                    <div className='col-md-6'>
                        <h1 className='mb-3 fw-bold default-color'>তুমি রেডি তো...?</h1>
                        <p>একজন দক্ষ ফ্রিল্যান্সার হতে চাইলে আমাদের কোর্সে জয়েন করো। শিখতে গেলে যা যা লাগবে সেগুলো প্রোভাইড করব আমরা তোমার শুধু লেগে থাকতে হবে, হার্ড ওয়ার্ক করতে হবে।</p>
                        <a className='banner-left-button mt-2' href="https://docs.google.com/forms/d/e/1FAIpQLSeK2LMFY2rOiAHbnZUMg0i2vH4BltR0yD00TiNUoeyNjhprRw/viewform">Enroll Now</a>
                    </div>
                    <div className='col-md-4'>
                        <img src={mikeImg} alt="" className='img-fluid px-0 mx-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportJob;
