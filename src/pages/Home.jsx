


import React, { useState } from 'react'


import Counter from '../components/Counter'

import CardContainer from '../components/CardContainer'

const Home = () => {

 


  return (
    <div className='home'>

<div className="container">

<Counter/>

<CardContainer/>


</div>
    
    </div>
  )
}

export default Home