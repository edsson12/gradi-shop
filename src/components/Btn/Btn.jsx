import React from 'react'
import './Btn.scss'

const Btn = ({texto,type}) => {

  return (
    <button className={`o-btn-${type}`}>
        {texto}
    </button>
  )
}

export default Btn