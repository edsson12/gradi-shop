import React, { useState } from 'react'
import './Size.scss'



const Size = () => {

const [mantener, setMantener] = useState(0)


  return (
    <div className="o-size-container">
        <p>Size:</p>
        <div className={mantener===1? 'o-number-cont-activo':'o-number-cont'} onClick={()=>setMantener(1)}>
            <h4>5</h4>
        </div>
        <div className={mantener===2? 'o-number-cont-activo':'o-number-cont'} onClick={()=>setMantener(2)}>
            <h4>3</h4>
        </div>
        <div className={mantener===3? 'o-number-cont-activo':'o-number-cont'} onClick={()=>setMantener(3)}>
            <h4>7.5</h4>
        </div>
        <div className={mantener===4? 'o-number-cont-activo':'o-number-cont'} onClick={()=>setMantener(4)}>
            <h4>4</h4>
        </div>
        <div className={mantener===5? 'o-number-cont-activo':'o-number-cont'} onClick={()=>setMantener(5)}>
            <h4>9</h4>
        </div>
       
    </div>
  )
}

export default Size