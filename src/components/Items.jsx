import {  Card , Col, Row, Container  } from "react-bootstrap";

const Items = ({ datoHeroe }) => {
  /* if(!datoHeroe){
      return
       <Alert variant="primary"> No hay datos de SuperHeroe</Alert>
  } */
  return (
    <>
    <Container >
      <Row  xs={1} md={2} xl={4}>
      {datoHeroe.map((itemHeroe, idHeroe) => {
         return (
          <Col  key={idHeroe}  >
          <Card className="card-comic mt-2">
          <Card.Img variant="top" src={`${itemHeroe.thumbnail.path}.${itemHeroe.thumbnail.extension}`} fluid />
            <Card.Body>
              <Card.Title>{itemHeroe.title}</Card.Title>
              <Card.Text>
                Aqui va el texto
              </Card.Text>
            {/*   <Button variant="primary">Go somewhere</Button> */}
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
