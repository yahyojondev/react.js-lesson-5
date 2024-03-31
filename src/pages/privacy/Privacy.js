import React from 'react'
import './Privacy.css'
import { privacyproduct } from '../../static';


function Privacy() {
  let privacyitem = privacyproduct?.map(el=>(
  <div className="privacy__container">
           <div className="privacy__wrapper">
            <h1 className="privacy__title">{el.title}</h1>
            <p className="privacy__text">{el.text}</p>
            <p className="privacy__text">{el.text}</p>
            <h2 className="privacy__title__one">{el.title2} </h2>
            <p className="privacy__text">{el.text}</p>
              <p className="privacy__text">{el.text}</p>
              <h3 className="privacy__title__two">{el.title3}</h3>
              <p className="privacy__text">{el.text}</p>
              <p className="privacy__text">{el.text}</p>
            </div> 
     </div>
  ))
    
  return (
    <div className="privacy">
      {privacyitem}
   </div>
   
  )
}

export default Privacy