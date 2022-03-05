let boton = document.querySelector(".boton");
let letra = document.querySelector(".color");
let yo = document.querySelector(".yo");
let boton2 = document.querySelector(".boton2");

boton.addEventListener('click', ()=>{
  document.body.style.backgroundColor = "#efeddc";
  document.body.style.color = "black";

  letra.classList.add("color1");
  boton.classList.replace("boton", "boton1-opaco");

  boton2.classList.replace("boton2", "boton2-bien")
  boton2.addEventListener('click', ()=>{
    
    document.body.style.backgroundColor = "rgba(15, 23, 30, 0.9)";
    document.body.style.color = "white";

    letra.classList.replace("color1", "color");
    boton.classList.replace("boton1-opaco","boton" );
    boton2.classList.replace("boton2-bien","boton2");

  

  })

   


})
