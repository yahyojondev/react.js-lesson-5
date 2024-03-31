import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/images/footerlofo.svg'
import footermedia from '../../assets/images/footermedialogo.png'

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                  <ul className="footer__list">
                    <li className="footer__item">
                        <img src={footerlogo} className="footer__img"></img>
                        <ul className="footer__item__list">
                            <li className="footer__list__item"><a href="#" className="footer__link link__title">Bespoke software <br /> solutions</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__link"><img src={footermedia} alt="" /></a></li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <h4 className="footer__title">Company</h4>
                        <ul className="footer__item__list">
                            <li className="footer__list__item"><a href="#" className="footer__link">About Us</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__link">Careers</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__link">Services</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__link">Blog</a></li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <h4 className="footer__title">Connect</h4>
                        <ul className="footer__item__list">
                            <li className="footer__list__item"><a href="#" className="footer__link">hi@finsweet.com</a></li>
                            <li className="footer__list__item"><a href="#" className="footer__link">+(123) 456-7890</a></li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <h4 className="footer__title">Join Newsletter</h4>
                        <ul className="footer__item__list">
                            <li className="footer__list__item"><input type="text" placeholder='Type here email' className="footer__input" /></li>
                            <li className="footer__list__item"><a href="#" className="footer__btn">Subscribe</a></li>
                        </ul>
                    </li>
                  </ul>  
                  <div className="footer__bottom">
                     <a href="" className="footer__bottom__link">© All rights reserved – Finsweet</a>
                     <a href="" className="footer__bottom__link">Privacy Policy  Terms & Conditions</a>
                </div>    
           </div>
        </div>
    </div>
  )
}

export default Footer