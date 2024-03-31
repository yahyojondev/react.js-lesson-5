import React from 'react'
import './Blog.css'
import { blogproducts } from '../../static'
import { blogcardsproduct } from '../../static'

function Blog() {
  let blogitem = blogproducts?.map(el=>(
            <div key={el.id} className="blog__wrapper">
           <div className="blog__left">
               <div className="logo__wrapper">
                <img src={el.logo} alt="" className="blog__logo__img" />
                <p className="blog__logo__text">{el.logotext}</p>
               </div>
               <h1 className="blog__title">{el.title}</h1>
               <p className="blog__text">{el.text}</p>
               <a href="#" className="blog__link">{el.link}</a>
           </div>
           <img src={el.img} alt="" className="blog__img" />
        </div>
  ))
  let blogcrads = blogcardsproduct?.map(el=>(
    <div key={el.id} className="card">
            <img src={el.img} className='card__img' alt="" />
            <div className="card__content">
              <h3 className="card__title">{el.title}</h3>
              <p className="card__text">{el.text}</p>
              <a className="card__link">{el.link}</a>
            </div>
          </div>
  ))
  return (
    <>
    <div className="blog">
      <div className="container">
       {blogitem}
      </div>
    </div>
    <div className="blog__cards">
      <div className="container">
        <h2 className="blog__title">All Posts</h2>
        <div className="cards">
           {blogcrads}
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog