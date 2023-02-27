

import React, { useState } from 'react'

const Card = ({imageCard, titleCard, descriptionCard, priceCard, saygacF}) => {
  
  let [select, setSelect] = useState(true)

  
  
  let changeColor = (e)=> {
if(select){
e.target.classList.add("selected")
e.target.classList.remove("select")
}else if(!select){
  e.target.classList.add("select")
e.target.classList.remove("selected")
}
saygacF()
setSelect(!select)
  }
  
  
  return (
    <div className='card'>
        <img src={imageCard} alt="image" />

    <p className='title'>{titleCard}</p>
    <p className='description'>{descriptionCard}</p>
    <p className='price'>Price: <span>{priceCard}</span>$</p>
    <i className ="fa-solid fa-basket-shopping" onClick={changeColor}></i>
    </div>
  )
}

export default Card