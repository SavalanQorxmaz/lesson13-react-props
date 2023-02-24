

import React from 'react';

import Card from './Card';

import {DB} from "../database/DB"


const CardContainer = () => {



  return (

    <div className="card-container">
{
 

DB.map((value) => 


  <Card
  key = {value.id}
  titleCard = {value.title.slice(0, 20) + "..."}
  descriptionCard = {value.description.slice(0, 50)+ "..."}
  imageCard = {value.image}
  priceCard = {value.price}
  />


)

 

  }

 
    </div>
  )
  
}
export default CardContainer


