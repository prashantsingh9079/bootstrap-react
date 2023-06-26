import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
// import classes from './NavScroll.module.css';

function NavScroll(props) {




    return (
        <div>
        <Nav style={{background:'black'}} className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link style={{color:'white'}} href="/home">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color:'white'}} eventKey="link-1">STORE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color:'white'}} eventKey="link-2">ABOUT</Nav.Link>
            </Nav.Item>
            <div style={{float:'right'}}>
            <Button onClick={props.showCart} style={{float:'right',position:'right'}}>Cart</Button>
            </div>
        </Nav>
        
        
        </div>
    );
}

export default NavScroll;