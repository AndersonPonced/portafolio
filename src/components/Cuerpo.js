import React from 'react'
import {Navbar} from './Navbar'
import {Costado} from './Costado'
import {Perfil} from './Perfil'
import {Banner} from './Banner'
import {useNavigate } from 'react-router-dom'
import Balance from './Balance'
import Noticias from './Noticias'
import Footer from './Footer'




export const Cuerpo = ({usuario, setUsuario}) => {


   

const cambiar = () =>{

  document.body.style.backgroundColor = "rgba(15, 23, 30, 0.9)"
  Navbar.classList.replace("Nav","Nava" );
}


  const navigate = useNavigate();

  const ingresar = e =>{
     
     navigate("/blog")
  
  
  }

  const ingresaar = e =>{
     
    navigate("/coin")
 
 
 }


  return (
    <div>
       <Navbar/>
       <Costado/>
       <Banner/>
       <Perfil usuario={usuario} setUsuario={setUsuario}/>
<button className='btn3' onClick={()=>{ingresar()}} >Blog</button>
<button className='btn4' onClick={()=>{ingresaar()}} >Mercado</button>
    <Balance/>
    <Noticias/>
    <Footer/>




    </div>
  )
}

export default Cuerpo
