import React from 'react'
import {Wallet} from '../components/Wallet'
import {Fotos} from '../components/Fotos'
import { useState } from 'react'
import swal from 'sweetalert'
import {useNavigate } from 'react-router-dom'
 


export const Formulario = ({usuario, setUsuario}) => {



 


 const handleChange = e =>{
   
   setUsuario({
    ...usuario,
    [e.target.name]: e.target.value
   })


 }

 let {name} = usuario

 const handleSubmit = ()=>{

     //validación de datos

     if(name === ""){

      swal({

        title: "Incompleto",
        text: "Debe ingresar un nombre de usuario cool",
        icon: "error",
       button:"Aceptar",
        
       })
         return

     }else{
      mostrarAlerta()
      ingresar()
     }

      
     //consulta

  const requestInit = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(usuario)

  }

     fetch('http://localhost:9000/api', requestInit)
     .then(res => res.json())
     .then(res => console.log(res))

     

 }

 const mostrarAlerta = ()=>{

      swal({

       title: "Bienvenido",
       text: "Este es un simulador pro",
       icon: "success",
      button:"Aceptar",
      
       
      })

 }

 const navigate = useNavigate();

const ingresar = e =>{
   console.log(setUsuario.name)
   navigate("/cuerpo")


}
 
  return (
    <div>

<a href='/'  className='wallet'>WalletFresh</a>

      <h1 className='titu'>Ingresa tu cuenta “Fresh”</h1>
      <br/><br/>
      <div className='formulario'>
       <form onSubmit={handleSubmit}>

       <input name='name' onChange={handleChange} htmlFor="usu" id='usu' className='usuario' type={"text"} placeholder='Nombre de usuario'/>
      
       <button className='btn' type='submit'>Entrar</button>


       </form>
 
      <div>


<Fotos/>

      </div>



       </div>



    </div>
  )
}




export default Formulario
