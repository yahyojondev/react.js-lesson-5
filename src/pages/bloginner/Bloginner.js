import React from 'react'
import './Bloginner.css'
import { blogcardsproduct, bloginner, bloginnerproducts } from '../../static'

function Bloginner() {
  let bloginneritem = bloginnerproducts?.map(el=>(
    <div className="blog__inner__wrapper">
            <img src={el.img} alt="" className="blog__inner__hero__img" />
            <div className="containerblog__inner">
              <div className="bloginner__wrapper">
                  <h2 className="bloginner__title">{el.title1}</h2>
              <p className="bloginner__text">{el.text}</p>
              <p className="bloginner__text">{el.text}</p>
              <p className="bloginner__text">{el.text}</p>
              <h2 className="bloginner__title">{el.title2}</h2>
              <p className="bloginner__text">{el.text}</p>
              <p className="bloginner__text">{el.text}</p>
              </div>
            </div>
        </div>
  ))
  return (
    <div className="blog__inner">
      <div className="container">
       {bloginneritem}
      </div>
    </div>
  )
}

export default Bloginner