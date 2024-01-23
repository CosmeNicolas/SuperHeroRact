import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {Container} from 'react-bootstrap'
import { useState } from "react"
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"
import Imagen from "./components/Imagen"



function App() {
  const [BuscarHeroe, setBuscarHeroe] = useState('')
  const [datoHeroe, setDatoHeroe] =useState([])

    /* Consumo de API  */
    const publicKey = '5cab833b6006af603f7691db641a2373';
    const MostrarApi = async (buscarComic)=>{
      try {
        const ts = 2000
        const hash = (`1b77f26bd6206b4e08e30562e6d1f39b`)
        const respuestaApiHero = await fetch(`
        https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${buscarComic}`)
        const datos  = await respuestaApiHero.json()
        /* chequear si todo va bien  */
        if(respuestaApiHero.ok){
          console.log(datos.data.results)
          setDatoHeroe(datos.data.results)
        }else{
          console.log('tenes error papurri')
        }
        
        
        } catch (error) {
         console.error('no hay respuesta')
        }
    
      }


  return (
    <>
     <Container className="main">
      <Imagen/>
      <h1 className="text-light text-center mt-5 fuente">Super Heroe</h1>
      <Formulario BuscarHeroe={BuscarHeroe}  setBuscarHeroe={setBuscarHeroe}  MostrarApi={MostrarApi} datoHeroe={datoHeroe} />
     </Container>
     <Footer/>
    </>
  )
}

export default App
