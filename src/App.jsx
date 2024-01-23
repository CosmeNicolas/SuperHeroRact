import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {Container} from 'react-bootstrap'
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"

function App() {

  const publicKey = '5cab833b6006af603f7691db641a2373';
  
  const MostrarApi = async ()=>{
    try {
      const ts = 2000
      const hash = (`1b77f26bd6206b4e08e30562e6d1f39b`)
      const respuestaApiHero = await fetch(`
      http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      const datos  = await respuestaApiHero.json()
      console.log(datos)
    } catch (error) {
     console.error('no hay respuesta')
    }

  }
  MostrarApi()


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
