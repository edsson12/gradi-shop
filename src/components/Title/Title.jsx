import React from 'react'
import './Title.scss'

const Title = ({resultado}) => {
  return (
    <div className='o-title-container'>
        <p>By Nike x ALYX</p>
        <h2>{resultado.title}</h2>
        <div className="o-price-container">
        <h3>${resultado.price}</h3>
        <p>${resultado.compare_at_price_max}</p >

        </div>
    </div>
  )
}

export default Title