import React, { useState } from 'react'
import './Quantity.scss'

const Quantity = ({resultado}) => {

    

   

    const [suma, setSuma] = useState(0)

    const subsQtty =()=>{
        setSuma(suma-1)
        if (suma<=0) {
            setSuma(0)
        }
    }

    const addQtty =()=>{
        setSuma(suma+1)
        
    }
  return (
    <div className='o-qnt-container'>
        <div className="o-counter">
        <p onClick={()=>subsQtty()}>-</p>
        <p>{suma}</p>
        <p onClick={()=>addQtty()}>+</p>
        </div>
        <div className="o-total-price">
        <p className='light'>Total price:</p>
        <p className='dark'>${resultado.price*suma}</p>
        <div></div>
        </div>

    </div>
  )
}

export default Quantity