import { Image } from 'react-bootstrap'
import heroes from '../assets/heroes.png'

const Imagen = () => {
  return (
    <>
    <dir className="text-center" >
    <Image src={heroes} fluid  className='mt-3 p-1 '/>
    </dir>
   
    </>
  )
}

export default Imagen