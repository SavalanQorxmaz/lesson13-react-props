

import React from 'react'

const Card = ({imageCard, titleCard, descriptionCard, priceCard, idCard}) => {
  return (
    <div className='card'>
        <img src={imageCard} alt="image" />

    <p className='title'>{titleCard}</p>
    <p className='description'>{descriptionCard}</p>
    <p className='price'>Price: <span>{priceCard}</span>$</p>
    
    </div>
  )
}

export default Card