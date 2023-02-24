

import React, {useState} from 'react'

import Button from './Button'



const Counter = () => {

    const [count, setCount] = useState(0)

    const changeCount = (c)=> {

        
      
            setCount(count + c)

            if(c < 0 && count ==0){
                setCount(0)
            }
        
    
       
        
      }

      const buttonStyle = {
        backgroundColor: "green",
      }

    return (


     <div className="counter">
    <Button newClass ={"decButton"} onClick = {()=>changeCount(-1)}  value ="-"/>
    <span>{count}</span>
    <Button newClass = {"incButton"} onClick= {()=>changeCount(1)} value ={"+"}/>
        </div>
      
  
  )
}

export default Counter