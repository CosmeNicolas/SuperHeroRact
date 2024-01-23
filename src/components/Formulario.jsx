import { useState } from "react";
import { Form, Button } from "react-bootstrap"
useState
import Items from "./Items";


const Formulario = () => {
    const [BuscarHeroe, setBuscarHeroe] = useState('')
    console.log(' desde el input ')

    const handleSubmit = (e) => {
        e.preventDefault()
        /* Consumo de API  */
            const publicKey = '5cab833b6006af603f7691db641a2373';
            const MostrarApi = async ()=>{
              try {
                const ts = 2000
                const hash = (`1b77f26bd6206b4e08e30562e6d1f39b`)
                const respuestaApiHero = await fetch(`
                http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
                const datos  = await respuestaApiHero.json()
                if(datos && datos.data && datos.data.results)
                console.log(datos.data.results)
               
              } catch (error) {
               console.error('no hay respuesta')
              }
          
            }
            MostrarApi()
            setBuscarHeroe(BuscarHeroe)
         /* Termina consumo de API  */
    }







  return (
      <>
       <Form onSubmit={handleSubmit} className="d-flex flex-row align-items-center justify-content-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Buscar SuperHeroe</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Buscar SuperHeroe" 
         value={BuscarHeroe}
         onChange={(e)=>setBuscarHeroe(e.target.value)}/>
      </Form.Group>
      <Button className="mt-3 ms-1" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Items BuscarHeroe={BuscarHeroe}/>
    </>
  )
}

export default Formulario
