import React from 'react';
import { Link } from 'react-router-dom';
import './Trainer.css';
import hafizPhoto from '../../../images/trainers/hafiz.jpg';
import nazmulPhoto from '../../../images/trainers/nazmul.jpeg';
import sumitPhoto from '../../../images/trainers/sumit.jpg';
import asifPhoto from '../../../images/trainers/asif.jpg';
import shibinPhoto from '../../../images/trainers/shibin.jpg';
import alAminPhoto from '../../../images/trainers/alAmin.jpeg';

function Trainers() {
    return (
        <div className='mt-5 pt-5'>
            <div className='d-flex justify-content-center mb-5'>
                <h1 className='text-center ceo-founder'>CEO & Founder</h1>
            </div>
            <div className='trainer-main d-flex justify-content-center mb-5 pb-5'>
                <div className='hafiz container row d-flex justify-content-between align-items-center px-0'>
                    <div className='col-md-4 mb-5 mb-md-0'>
                        <img src={hafizPhoto} alt="" className='hafiz-photo img-fluid ' />
                    </div>
                    <div className='col-md-7'>
                        <h2 className='mb-4 fw-bold default-color'>মোঃ হাফিজুর রহমান</h2>
                        <p className='hafiz-details mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum optio nulla voluptate officia facere debitis, reprehenderit pariatur illum laudantium corporis inventore nostrum ducimus, aliquam commodi praesentium architecto omnis a sint perferendis tempore unde ad incidunt? Minus sapiente illo mollitia. Consequuntur vitae, nam perferendis ut necessitatibus error delectus laboriosam, provident reprehenderit maiores cupiditate deserunt asperiores ducimus voluptatem animi mollitia ad repellat nobis enim! Praesentium asperiores culpa delectus! Numquam enim perferendis consectetur quisquam et modi, accusantium debitis atque repellendus unde voluptatibus aspernatur harum magni, ipsa officiis distinctio assumenda adipisci blanditiis totam non placeat, provident dolor omnis ad. Rem modi necessitatibus consequuntur.</p>
                        <Link className='see-details-btn' to="/webDev">See Details</Link>
                    </div>
                </div>
            </div>

            <hr />
            {/* onnanno prosikkhok gon */}
            <div className='text-center my-5 pt-5'>
                <h1 className='fw-bold mb-3 default-color'>অন্যান্য প্রশিক্ষকগন</h1>
                <div className='d-flex justify-content-center'>
                    <p className='fs-5 w-50'>আনলিমিটেড হেল্প, গাইডলাইন, এমনকি গুগল মিট এ স্ক্রিনশেয়ার করে সমস্যা সমাধান করতে চাইলে, জয়েন করো <span className='fw-bold'>GCFTC.</span></p>
                </div>
            </div>
            <div className='other-trainers d-flex justify-content-center mb-5'>
                <div className='trainer-all-cards container row px-0'>
                    <div class="trainer-card card mb-3 col-lg-6 p-5">
                        <div class="row g-0 d-flex align-items-center">
                            <div class="col-md-5">
                                <img src={sumitPhoto} class="trainer-img-top img-fluid" alt="..." />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Sumit Roy</h2>
                                    <p>Graphics Design Expert</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link className='trainer-see-details' to="/webDev">See Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="trainer-card card mb-3 col-lg-6 p-5">
                        <div class="row g-0 d-flex align-items-center">
                            <div class="col-md-5">
                                <img src={nazmulPhoto} class="trainer-img-top img-fluid" alt="..." />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Nazmul H Sujon</h2>
                                    <p>Digital Marketing Expert</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link className='trainer-see-details' to="/webDev">See Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="trainer-card card mb-3 col-lg-6 p-5">
                        <div class="row g-0 d-flex align-items-center">
                            <div class="col-md-5">
                                <img src={shibinPhoto} class="trainer-img-top img-fluid" alt="..." />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Shibin Khan</h2>
                                    <p>Web Development Expert</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link className='trainer-see-details' to="/webDev">See Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="trainer-card card mb-3 col-lg-6 p-5">
                        <div class="row g-0 d-flex align-items-center">
                            <div class="col-md-5">
                                <img src={asifPhoto} class="trainer-img-top img-fluid" alt="..." />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Abdullah Al Asif</h2>
                                    <p>Web Development Expert</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link className='trainer-see-details' to="/webDev">See Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Trainers
