import {  Card , Col, Row, Container, Alert  } from "react-bootstrap";

const Items = ({ datoHeroe }) => {
  if(!datoHeroe){
      return
       <Alert variant="primary"> No hay datos de SuperHeroe</Alert>
  } 
  return (
    <>
    <Container >
      <Row  xs={1} md={2} xl={4}>
      {datoHeroe.map((itemHeroe, idHeroe) => {
         return (
          <Col  key={idHeroe}  >
          <Card className="card-with-hover mt-2">
          <Card.Img className="" variant="top" src={`${itemHeroe.thumbnail.path}.${itemHeroe.thumbnail.extension}`}  />
         
            {/*   <Button variant="primary">Go somewhere</Button> */}
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
