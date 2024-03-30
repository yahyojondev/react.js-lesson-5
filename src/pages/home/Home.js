import React from 'react'
import './Home.css'
import { homeproduct } from '../../static'
import { homeourproduct } from '../../static'

function Home() {
  let homeitem = homeproduct?.map(el=>(
    <div key={el.id} className="home__wrapper">
              <div className="home__left">
                <h1 className="home__title">{el.title}</h1>
                <p className="home__text">{el.text}</p>
                <a className="home__btn">{el.btn}</a>
              </div>
              <div className="home__right">
                <img src={el.img} alt="" className="home__img" />
              </div>
          </div>
  ))
  let ouritem = homeourproduct?.map(el=>(
      <div key={el.id} className="our__card">
        <h3 className="our__card__title">{el.title1}</h3>
        <p className="our__text">{el.text}</p>
        <a href="" className="our__link">{el.link}</a>
      </div>
              
    ))

  return (
    
    <>
    <div className='Home'>
       <div className="container">
         {homeitem}
       </div>
    </div>
    <div className="our">
      <div className="container">
      <div className="our__wrapper">
        <h2 className="our__title">See our open positions </h2>
        <div className="our__cards">
          {ouritem}
        </div>
      </div>

      </div>
    </div>
    </>
      
   
  )
}

export default Home