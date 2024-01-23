import { Image , Container} from 'react-bootstrap'
import heroes from '../assets/heroes.png'

const Imagen = () => {
  return (
    <>
    <Container fluid className='text-center mt-5'>
    <Image src={heroes} />
    </Container>
    </>
  )
}

export default Imagen