import {  Card , Col, Row, Container, Alert, ListGroup , Button } from "react-bootstrap";

const Items = ({ datoHeroe }) => {
 
  return (
    <>
    <Container >
      <Row  xs={1} md={2} xl={4}>
      {datoHeroe.map((itemHeroe) => {
         return (
          <Col className="my-2"  key={itemHeroe.id}  >
          <Card className=" bg bg-dark h-100 position-relativ">
          <Card.Img className="img-inCard"  variant="top" src={`${itemHeroe.thumbnail.path}.${itemHeroe.thumbnail.extension}`}  />
          <Card.ImgOverlay className="img-overlay d-flex align-items-center justify-content-center ">
                <Card.Title className="card-title text-gray text-center bg bg-black rounded-3 opacity-50 ">{itemHeroe.title}</Card.Title>
            </Card.ImgOverlay>
          <ListGroup className="bg bg-black" variant="flush">
            <ListGroup.Item className="bg bg-dark text-light">Precio: ${itemHeroe.prices[0].price} </ListGroup.Item>
            <ListGroup.Item className="bg bg-dark text-light">Format: {itemHeroe.format}  </ListGroup.Item>
          </ListGroup>
          <div className="py-2 position-absolute bottom-0 w-100">
          <Card.Body className="bg bg-dark text-center" > 
             <Button className="fuente d-flex flex-column align-items-center" href={itemHeroe.urls[0].url} variant="danger">Ver Mas</Button> 
          </Card.Body>
          </div>
          </Card>
          </Col>
        )
      })}
      </Row>
      {datoHeroe.length === 0 && <Alert variant="danger" className="mt-2 fuente text-dark">
           No se encontraron conmics 
          </Alert> }
    </Container>
    </>
  );
};

export default Items;
