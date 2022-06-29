import React from 'react'
import './Btn.scss'

const Btn = ({texto}) => {
  return (
    <button className='o-btn'>
        {texto}
    </button>
  )
}

export default Btn