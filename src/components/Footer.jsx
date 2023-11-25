import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Clothes_Unlimited_logo.png';
import '../style/footer.css';
import payment_methods from '../assets/payment_methods.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import twitter from '../assets/twitter.png';

function Footer() {

    return (
        <div>
        <div className="footer">
            <div className="footer__main">
                <h3 className="footer__main__title">Payment methods</h3>
                <img className='footer__main__img' src={payment_methods} alt="Payment Methods"/>
            </div>
            <div className="footer__info">
                <h3 className="footer__info__title">Useful info</h3>
                <p className="footer__info_p">Terms and conditions</p>
                <p className="footer__info_p">Payment methods</p>
                <p className="footer__info_p">Delivery and returns</p>
                <p className="footer__info_p">Order tracking</p>
            </div>
            <div className="footer__contact">
                <h3 className="footer__contact__title">Help & Support</h3>
                <p className="footer__contact_p">Contact us</p>
                <p className="footer__contact_p">Frequently asked questions</p>
            </div>
        </div>
        <div className='footer__social'>
            <a href="www.facebook.com"><img className='footer__social__icon' src={facebook} alt="Social Media"/></a>
            <a href="www.instagram.com"><img className='footer__social__icon' src={instagram} alt="Social Media"/></a>
            <a href="www.youtube.com"><img className='footer__social__icon' src={youtube} alt="Social Media"/></a>
            <a href="www.linkedin.com"><img className='footer__social__icon' src={linkedin} alt="Social Media"/></a>
        </div>
        <div className='footer__band'>©2023 Clothes Unlimited</div>
        </div>
    )

}

export default Footer;