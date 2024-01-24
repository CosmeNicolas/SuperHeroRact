import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {Container} from 'react-bootstrap'
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"
import Imagen from "./components/Imagen"


function App() {
  

  return (
    <>
     <Container className="main">
      <Imagen/>
      <h1 className="text-light text-center mt-5 fuente">Super Heroe</h1>
      <Formulario  />
     </Container>
     <Footer/>
    </>
  )
}

export default App
