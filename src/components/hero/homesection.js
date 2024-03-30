import React from 'react'
import { homeourproduct } from '../../static'

function homesection() {
    let ouritem = homeourproduct?.map(el=>(
   <div key={el.id} className="our__wrapper">
                <h2 className="our__title">{el.title}</h2>
                <div className="our__cards">
                    <div className="our__card">
                        <h3 className="our__card__title">{el.title1}</h3>
                        <p className="our__card__text">{el.text}</p>
                        <a href="" className="our__card__link">{el.link}</a>
                    </div>
                </div>
            </div>
    ))
  return (
    <div className="our">
        <div className="container">
           {ouritem}
        </div>
    </div>
  )
}

export default homesection