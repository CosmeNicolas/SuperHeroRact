import { useState } from "react";
import { Form, Button } from "react-bootstrap"
useState
import Items from "./Items";



const Formulario = ({BuscarHeroe,setBuscarHeroe,MostrarApi, datoHeroe}) => {
   
    const handleSubmit = (e) => {
        e.preventDefault()
        MostrarApi(BuscarHeroe);
        }
          /* Termina consumo de API  */


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
      <Button  className="mt-3 ms-1" variant="dark" type="submit">
        Consultar
      </Button>
    </Form>
    <Items datoHeroe={datoHeroe} />
    </>
  )
}

export default Formulario
