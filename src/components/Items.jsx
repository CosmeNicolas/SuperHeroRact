import {  Card , Col, Row, Container, Alert, ListGroup , Button } from "react-bootstrap";

const Items = ({ datoHeroe }) => {
  if(!datoHeroe){
      return
       <Alert variant="primary"> No hay datos de SuperHeroe</Alert>
  } 
  return (
    <>
    <Container >
      <Row  xs={1} md={2} xl={4}>
      {datoHeroe.map((itemHeroe) => {
         return (
          <Col  key={itemHeroe.id}  >
          <Card className="card-with-hover my-2">
          <Card.Img className="" variant="top" src={`${itemHeroe.thumbnail.path}.${itemHeroe.thumbnail.extension}`}  />
          <ListGroup variant="flush">
            <ListGroup.Item>{itemHeroe.title}</ListGroup.Item>
            <ListGroup.Item>Precio: ${itemHeroe.prices[0].price} </ListGroup.Item>
            <ListGroup.Item>Format: {itemHeroe.format} </ListGroup.Item>
          </ListGroup>
          <Card.Body>
             <Button href={itemHeroe.urls[0].url} variant="primary">Go somewhere</Button> 
          </Card.Body>
          </Card>
          </Col>
        )
      })}
      </Row>
    </Container>
    </>
  );
};

export default Items;
