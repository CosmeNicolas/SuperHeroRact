import {Carousel, Image } from 'react-bootstrap';
import actoresMarvel  from "../assets/img/actoresMarvel.jpg"

const Carrusel = () => {
  return (
    <>
    <Carousel>
    <Carousel.Item>
     
      <Carousel.Caption>
      <Image src={actoresMarvel} alt="marvel" fluid/>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
      <Carousel.Caption>
      <Image src={actoresMarvel}alt="marvel" fluid/>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     
      <Carousel.Caption>
      <Image src={actoresMarvel} alt="marvel" fluid/>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </>
  )
}

export default Carrusel