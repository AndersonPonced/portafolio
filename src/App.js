import {Formulario} from './components/Formulario'
import {Cuerpo} from './components/Cuerpo'


import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Blog} from './components/Blog'
import Coin from './components/Coin';
import Nosotros from './components/Nosotros';




function App() {

  const [usuario, setUsuario] = useState({

    name: ""
    
    })
    

  return (
    <div className="App"> 
  


  <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Formulario usuario={usuario} setUsuario={setUsuario}/>} />
            <Route path='/cuerpo' element={<Cuerpo usuario={usuario} setUsuario={setUsuario}/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/coin' element={<Coin/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
       
          </Routes>
        
      </BrowserRouter>

 
 
           </div> 
      


    
  );
}

export default App;
