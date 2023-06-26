import {Nav,Card,Button} from "react-bootstrap"
import './App.css';
import alb1 from '../src/assets/album1.jpeg'


function App() {
  return (
    <>
    <Nav style={{background:'black',border:'2px',borderColor:'white'}} className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link style={{color:'white'}} href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:'white'}} eventKey="link-1">STORE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:'white'}} eventKey="link-2">ABOUT</Nav.Link>
        </Nav.Item>
      </Nav>
      <Card style={{ width: '98rem',textAlign:'center',height:'12rem', fontFamily:'fantasy', fontSize:'xx-large',color:'white',background:'grey' }}>
      <Card.Body>
        <Card.Title>THE GENERICS</Card.Title>
      </Card.Body>
    </Card>
    <div style={{textAlign:'center'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={alb1} />
      <Card.Body>
        <Card.Title>Album 1</Card.Title>
        
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={alb1} />
      <Card.Body>
        <Card.Title>Album 2</Card.Title>
        
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>

    </div>
    </>
  );
}

export default App;
