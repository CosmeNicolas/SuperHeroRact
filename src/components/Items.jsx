import { Button, Card } from "react-bootstrap";

const Items = ({ datoHeroe }) => {
  /* if(!datoHeroe){
      return
       <Alert variant="primary"> No hay datos de SuperHeroe</Alert>
  } */
  return (
    <>
      {
        datoHeroe.map((itemHeroe, idHeroe) => (
          <Card key={idHeroe}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{itemHeroe.title}</Card.Title>
              <Card.Text>
                Aqui va el texto
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      }
    </>
  );
};

export default Items;
