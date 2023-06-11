import React from 'react';
import "./header.css";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';




function Header() {
  
  return (
    <Navbar>
      <Container fluid id="navcontainer">
      
        <Nav defaultActiveKey="/">
          <Col xs={8} md={6}>
          <Stack id="portfolio" gap={3}>
           
                <Image id = "selfpic" src="/src/assets/images/selfphoto.jpg" thumbnail />
              
             
                <Navbar.Brand id = "brand">
                  Dustin Swecker/Portfolio
                </Navbar.Brand>

                <Row>
                <MDBBtn id = "github" floating className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/DustinSwecker' target="_blank">
                <MDBIcon fab icon='github' animate='bounce'/>
                </MDBBtn>
          
        
                  <MDBBtn id = "linkedin" floating className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/dustin-swecker-34361931/' target="_blank"><MDBIcon fab icon='linkedin-in' animate='bounce'/>
                  </MDBBtn>
      
          
                  <MDBBtn id = "twitter" floating className='m-1' style={{ backgroundColor: '#55acee' }} href='https://twitter.com/DustinSwecker' target="_blank">
                  <MDBIcon className='me-2' fab icon='twitter' animate='bounce'/>
                  </MDBBtn>
    
          
              <MDBBtn  id = "email" className='m-1' floating style={{ backgroundColor: '#55acee' }} href='#'>
                <MDBIcon fas icon="envelope-square" animate='bounce'/></MDBBtn>
            </Row>
           
          </Stack>
          </Col>
          
          <Col xs={4} md={6} id="navitems">
              

        
          <Nav.Item  className="navitem">
            <Nav.Link eventKey="link-1">About Me</Nav.Link>
          </Nav.Item>
        
        
          <Nav.Item className="navitem">
            <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
          </Nav.Item>

          <Nav.Item  className="navitem">
            <Nav.Link eventKey="link-3">Resume</Nav.Link>
          </Nav.Item>
          </Col>
          
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;



