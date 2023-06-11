import React from 'react';
import "./home.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {MDBIcon} from 'mdb-react-ui-kit';
import napDyn from '../../assets/images/nap_dynamite.png'


function onHoverNapDyn (e) {
  e.target.src="https://media.tenor.com/d9LPx2gE3bkAAAAd/napoleon-dynamite-skills.gif"
}
function onMouseLeaveStatic (e) {
  e.target.src=`${napDyn}`;
}

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col>

                    <Card className="m-3"
                        style={
                            {width: '22rem'}
                    }>

                        <Card.Body className="homecards">

                            <Card.Text component={'span'} id="card1header">
                                Skills
                                
                              </Card.Text>
                                
                                  <Stack spacing={1} alignItems="center">
                                    <Stack direction="row"
                                        spacing={1} >

                                        <Chip style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                              icon={
                                                <MDBIcon 
                                            fab
                                            icon="js"/>
                                            }
                                            label="JavaScript"/>

                                        <Chip style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            icon={
                                                <MDBIcon 
                                            fab
                                            icon="react"/>
                                            }
                                            label="React.js"/>

                                        <Chip style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            icon={ 
                                                <MDBIcon 
                                            fab
                                            icon="bootstrap"/>
                                            }
                                            label="Bootstrap"/>

                                    </Stack>

                                    <Stack direction="row"
                                        spacing={1}>

                                        <Chip style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            icon={
                                                <MDBIcon 
                                            fab
                                            icon="envira"/>
                                            }
                                            label="MongoDB"/>

                                        <Chip style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            icon={
                                                <MDBIcon 
                                            fab
                                            icon="node-js"/>
                                            }
                                            label="Node.js"/>

                                        <Chip style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            label="Express"/>
                                    </Stack>

                                    <Stack direction="row"
                                        spacing={1}>

                                        <Chip icon={
                                                <MDBIcon 
                                            fab
                                            icon="html5"/>
                                            }
                                            style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            label="HTML"/>

                                        <Chip icon={
                                                <MDBIcon 
                                            fab
                                            icon="css3"/>
                                            }
                                            style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            label="CSS"/>

                                        <Chip icon={
                                                <MDBIcon 
                                            fas
                                            icon="database"/>
                                            }
                                            style={
                                                {backgroundColor: '#C3E0E5'}
                                            }
                                            
                                            label="SQL"/>
                                    </Stack>
                                    <Stack>

                                    <Chip style={
                                            {backgroundColor: '#C3E0E5', width: 'fit-content'}
                                        }
                
                                        label="GraphQL"/>
                                    </Stack>
                                    
                                    </Stack>

                                    
                                
                            

                        </Card.Body>
                        <Card.Img onMouseOver={onHoverNapDyn} onMouseLeave={onMouseLeaveStatic} id="fullstack" variant="bottom" src={napDyn}/>
                    </Card>

                </Col>

                <Col></Col>

                <Col></Col>


            </Row>
        </Container>

    )
}

export default Home;
