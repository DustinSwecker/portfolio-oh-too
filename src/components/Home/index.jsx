import React from 'react';
import "./home.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { MDBIcon } from 'mdb-react-ui-kit';



const Home = () => {
    return(
    <Container fluid >
      <Row>
        <Col>
    <Card className = "m-3" style={{ width: '22rem' }}>
      
      <Card.Body className = "homecards">
        
        <Card.Text className= "m-2" id="card1header">
          Skills
          <br></br>
          <br></br>

          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip style={{backgroundColor: '#C3E0E5'}} component={'span'}className="chips" icon={<MDBIcon fab icon="js"/>} label="JavaScript" 
              /> 

              <Chip style={{backgroundColor: '#C3E0E5'}} component={'span'} icon={<MDBIcon fab icon="react"/>}label="React.js" />
              <Chip style={{backgroundColor: '#C3E0E5'}} component={'span'} icon={<MDBIcon fab icon="bootstrap" />} label="Bootstrap" />
          </Stack>

          <Stack direction="row" spacing={1}>
          
          <Chip style={{backgroundColor: '#C3E0E5'}} component={'span'} icon = {<MDBIcon fab icon="envira" />} label="MongoDB" />
          <Chip style={{backgroundColor: '#C3E0E5'}} component={'span'} icon={<MDBIcon fab icon="node-js" />} label="Node.js" />
          
          <Chip style={{backgroundColor: '#C3E0E5'}} component={'span'} label="Express" />
          </Stack>

          <Stack direction="row" spacing={1}>
          <Chip icon={<MDBIcon fab icon="html5" />} style={{backgroundColor: '#C3E0E5'}} component={'span'} label="HTML" />
          <Chip icon={<MDBIcon fab icon="css3" />} style={{backgroundColor: '#C3E0E5'}} component={'span'} label="CSS" />
          <Chip icon={<MDBIcon fas icon="database" />} style={{backgroundColor: '#C3E0E5'}} component={'span'} label="SQL" />
          </Stack>
         
         
          <Chip style={{backgroundColor: '#C3E0E5'}} component={'span'} label="GraphQL" />
          </Stack>
        </Card.Text>
        
      </Card.Body>
      <Card.Img id="fullstack" variant="bottom" src="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg?size=626&ext=jpg&ga=GA1.2.1612565925.1682379165&semt=ais" />
    </Card>
    </Col>
      <Col>
      <Card className="m-3" style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="homecards">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
    
      <Col>
      <Card className = "m-3" style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="homecards">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
      </Col>
    


    </Row>
      </Container>
      
    )
}

export default Home;