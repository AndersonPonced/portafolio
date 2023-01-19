import React from 'react'
import banner from '../Imagenes/bit.jpg'
import banner2 from '../Imagenes/tarjeta-binance.jpg' 
import banner3 from '../Imagenes/moneda.jpg' 
import banner4 from '../Imagenes/monedaa.jpg'


export const Banner = () => {
  return (
    <div>
      
  <img className='bit' src={banner}  />
  <img className='card' src={banner2}  />
  <img className='card2' src={banner3}  />
  <img className='card3' src={banner4}  />


    </div>
  )
}

export default Banner
