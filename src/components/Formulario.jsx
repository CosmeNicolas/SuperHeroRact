import { Form, Button } from "react-bootstrap"


const Formulario = () => {

 

  return (

       <Form className="d-flex flex-row align-items-center justify-content-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Buscar SuperHeroe</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
     
      <Button className="mt-3 ms-1" variant="primary" type="submit">
        Submit
      </Button>
      

    </Form>
  )
}

export default Formulario
