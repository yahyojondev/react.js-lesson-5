import React from 'react'
import './Contact.css'
import { contactproducts } from '../../static'
import map from '../../assets/images/map.png'

function Contact() {
  let contactitem = contactproducts?.map(el=>(
  <div key={el.id} className="contact__top">
             <div className="contact__texts">
              <h1 className="contact__title">{el.title}</h1>
              <p className="contact__text">{el.text}</p>
             </div>
             <div className="contact__texts">
              <h4 className="contact__title__one">{el.title2}</h4>
                <p className="contact__text__one">{el.text1}</p>
             </div>
             <div className="contact__texts">
              <h4 className="contact__title__one">{el.title3}</h4>
                <p className="contact__text__one">{el.text2}</p>
             </div>
          </div>
  ))
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          {contactitem}
          <div className="contact__forms">
             <div className="contact__form">
              <input className='contact__input' placeholder='FirstName' type="text" />
              <input className='contact__input' placeholder='LastName' type="text" />
              <input className='contact__input' placeholder='Email address' type="text" />
              <textarea name="" placeholder='Type mesage' id="" cols="30" rows="10"></textarea>
              <button className='contact__btn'>Submit</button>
          </div>
          <img src={map} alt="" className="map__img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact