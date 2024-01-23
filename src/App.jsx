import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {Container} from 'react-bootstrap'
import { useState } from "react"
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"

function App() {
 


  return (
    <>
     <Container className="main">
      <h1 className="text-light text-center mt-5">Super Hero</h1>
      <Formulario/>
     </Container>
     <Footer/>
    </>
  )
}

export default App
