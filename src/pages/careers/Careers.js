import React from 'react'
import './Carieers.css'
import { careersproducts } from '../../static'

function Careers() {
  let careersitem = careersproducts?.map(el=>(
    <div key={el.id} className="carieers__wrapper">
            <h1 className="careers__title">{el.title}</h1>
            <div className="jobsalary__wrapper">
              <div className="jobleft">
                <h3 className="jobtitle">Job Discription</h3>
                <p className="jobtext">Remote, India , 4 to 5 Years Of Experience Department: Website Design 5 Positions Available.</p>
              </div>
              <div className="jobright">
                  <h3 className="jobtitle">salary</h3>
                <p className="jobtext">$30000 Per Anum </p>
              </div>
            </div>
            <div className="careers__box">
                <ul className="careers__box__list">
                  <li className="careers__box__item item__one">{el.boxtitle1}</li>
                  <li className="careers__box__item">{el.boxtitle2}</li>
                  <li className="careers__box__item">{el.boxtitle3}</li>
                </ul>
                <p className="careers__box__text">{el.boxtext}</p>
            </div>
            <div className="careers__form__wrapper">
              <h2 className="box__title">{el.title2}</h2>
               <form action="" className="careers__form">
               <div className="form__input">
                 <input type="text" placeholder={el.name1} />
                <input type="text"  placeholder={el.name2} />
                <input type="text" placeholder={el.name3} />
                <input type="text" placeholder={el.name4}/>
               </div>
                <textarea name=""  placeholder="Why do you thing you are good fit for Ether?" cols="30" rows="10"></textarea>
                <button className="careers__btn">{el.btnname}</button>
               </form>
            </div>
        </div>
  ))
  return (
    <div className="carieers">
      <div className="container">
        {careersitem}
      </div>
    </div>
  )
}

export default Careers