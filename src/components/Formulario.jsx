import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap"
useState
import Items from "./Items";

const Formulario = () => {
   

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
/*  llamada de comic al inicio , en montaje  */
        const montajeComic = async ()=>{
          try {
            const ts = 2000
            const hash = (`1b77f26bd6206b4e08e30562e6d1f39b`)
            const respuestaApiHero = await fetch(`
            https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=12`)
            const datos  = await respuestaApiHero.json()
            /* chequear si todo va bien  */
            if(respuestaApiHero.ok){
              console.log(datos.data.results)
              setDatoHeroe(datos.data.results)
            }else{
              console.log('tenes error papurri')
            }
            } catch (error) {
             console.error('no hay respuesta facha')
            }
          }

        useEffect(() => {
        montajeComic()
        }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        MostrarApi(BuscarHeroe);
        setBuscarHeroe('')
        }

  return (
      <>

       <Form onSubmit={handleSubmit} className="d-flex flex-row align-items-center justify-content-center">
      <div className="text-center">
      <Form.Group  controlId="formBasicEmail">
        <Form.Label className="text-light text-center">
          Buscar SuperHeroe
          </Form.Label>
        <Form.Control
         type="text" 
         placeholder="Buscar SuperHeroe" 
         minLength={3}
         maxLength={50}
         value={BuscarHeroe}
         onChange={(e)=>setBuscarHeroe(e.target.value)}/>
      </Form.Group>
      <Button  className="mt-3 ms-1" variant="dark" type="submit">
        Consultar
      </Button>
      </div>
    </Form>
    <Items datoHeroe={datoHeroe} />
    </>
  )
}

export default Formulario
