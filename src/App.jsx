import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {Container} from 'react-bootstrap'
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
     <Container className="main">
      <h1 className="text-light text-center mt-5">Super Hero</h1>
     </Container>
     <Footer/>
    </>
  )
}

export default App
