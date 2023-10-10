import { Titulo } from "./utilsAct.js" ;
const textos = ["Mi texto número 1", "Mi texto número 2", "Mi texto número 3"] ;

const contenedor = document.createElement('section') ; 

for (const texto of textos) {
  const titulo = new Titulo (texto) ; 
  const elementoRenderizado = titulo.render() ; 
  contenedor.appendChild (elementoRenderizado) ; 
}

  document.body.appendChild (contenedor)