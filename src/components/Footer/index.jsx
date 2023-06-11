import React from 'react';
import "./footer.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return(
      <Container fluid id="footercontainer">
       <Row id="socialfooter">
        <Col id ="copyright">
        &copy; Swecker Web Dev Productions June 2023
        </Col>
        
        <Col>
        <MDBBtn id = "github" floating className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/DustinSwecker' target="_blank">
        <MDBIcon fab icon='github' animate='shake'/>
        </MDBBtn>
  

          <MDBBtn id = "linkedin" floating className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/dustin-swecker-34361931/' target="_blank"><MDBIcon fab icon='linkedin-in' animate='shake'/>
          </MDBBtn>

  
          <MDBBtn id = "twitter" floating className='m-1' style={{ backgroundColor: '#55acee' }} href='https://twitter.com/DustinSwecker' target="_blank">
          <MDBIcon className='me-2' fab icon='twitter' animate='shake'/>
          </MDBBtn>

  
      <MDBBtn  id = "email" className='m-1' floating style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fas icon="envelope-square" animate='shake'/></MDBBtn>
        </Col>  
       
            
     </Row>    
            
        
        
    </Container>
    )
}

export default Footer;