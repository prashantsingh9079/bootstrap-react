import Nav from 'react-bootstrap/Nav';


function NavScroll() {
    return (
        <div style={{borderBottomColor:'white',border:'2rem'}}>
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

        </Nav>
        </div>
    );
}

export default NavScroll;