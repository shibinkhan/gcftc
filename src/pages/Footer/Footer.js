import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-main'>
            <div className='footer container'>
                <div className='footer-top row'>
                    <div className='col-md-4'>
                        <h3>GCFTC</h3>
                        <p>Mridha Bari Road, Upozila Gate, Gournadi, Barishal.</p>
                        <p>Official: khanshibin500@gmail.com</p>
                        <p>Helpline: 01971134573, 01862471955</p>
                        <p>Available: 10AM - 10PM</p>
                    </div>
                    <div className='col-md-4'>
                        <h4>Useful Links</h4>
                        <p>Refund policy</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>About us</p>
                    </div>
                    <div className='col-md-4'>
                        <h4>Social Media Link</h4>
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
