import React from 'react'
import {Wallet} from './Wallet'
import {useNavigate } from 'react-router-dom'


export const Navbar = () => {

  const navigate = useNavigate();

  const ingresaar = e =>{
     
    navigate("/coin")
 
 
 }

 const ingresar = e =>{
     
  navigate("/nosotros")


}

  return (
    <div className='nav'>
<Wallet/>

<button className='p' onClick={()=>{ingresaar()}} >Mercado</button>
<button className='p2' onClick={()=>{ingresar()}} >Nosotros</button>
<p  className='p3'>Transformar valor</p>

      
    </div>
  )
}

export default Navbar
