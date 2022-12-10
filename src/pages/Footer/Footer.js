import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-main'>
            <div className='footer container'>
                <div className='footer-top row'>
                    <div className='col-md-5'>
                        <h3>GCFTC</h3>
                        <p>Mridha Bari Road, Upozila Gate, Gournadi, Barishal.</p>
                        <p>Email: gcaftc@gmail.com</p>
                        <p>Call Now: 01718104000</p>
                        <p>Available: 10AM - 10PM</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>Useful Links</h4>
                        <p>Refund policy</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>About us</p>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <h4 className='mb-4'>Social Media Links</h4>
                            <a href="https://www.facebook.com/gctcgnd"><i class="social-icon fa-brands fa-facebook"></i></a>
                            <i class="social-icon insta fa-brands fa-instagram"></i>
                            <i class="social-icon fa-brands fa-youtube"></i>
                            <i class="social-icon fa-brands fa-linkedin"></i>
                        </div>
                        <div className='mt-5'>
                            <h5 className='trd-no'>Trade Licence: 000000</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ftr-hr-main d-flex justify-content-center'>
                <hr className='ftr-hr'/>
            </div>
            <div className='footer-bottom'>
                <p className='copyright'>Copyright © 2022, Created by Shibin & Asif, GCFTC</p>
                {/* <small>Trade License:</small> */}
            </div>
        </div>
    )
}

export default Footer;
