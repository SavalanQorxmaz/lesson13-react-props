


import React, { useState } from 'react'


import Counter from '../components/Counter'

import CardContainer from '../components/CardContainer'


const Home = ({saygacF}) => {



  return (
    <div className='home'>

<div className="container">


<Counter/>

<CardContainer saygacF = {saygacF}/>


</div>
    
    </div>
  )
}

export default Home