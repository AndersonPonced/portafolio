import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAsyncValue } from 'react-router'
import {Navbar} from './Navbar'
import swal from 'sweetalert'

export const Blog = () => {

 const [usu, setUsu] = useState([])

useEffect(()=>{

   const getUsu = ()=>{

   fetch('http://localhost:9000/api')
   .then(res => res.json())
   .then(res => setUsu(res))
   }

getUsu()
}, [])




const [usuario, setUsuario] = useState({

    comentarios: ""
    
    })
    


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

  return (
    <div>
        <Navbar/>

        <div className='datos'>

<table className='table table-dark mt-4 table-hover'>
        <thead className=''>
          <tr>
  
      
        <th>Que opinas</th>

          </tr>
        </thead>
       <tbody className=''>
        {usu.map(usua =>(
 
     <tr key={usua.id}>

        <div className=''>
        <th>*{usua.comentarios}</th>
        </div>

     </tr>

))}
       </tbody>
       </table>


       <form onSubmit={handleSubmit}>

<input name='comentarios' onChange={handleChange} htmlFor="coment" id='coment' className='comentarios' type={"text"} placeholder='Nombre de usuario'/>

<button className='btn2' type='submit'>Entrar</button>


</form>



        </div>
      
    </div>
  )
}

export default Blog
