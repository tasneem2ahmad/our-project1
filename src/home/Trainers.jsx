import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
class Trainers extends React.Component {
    render() { 
        return <React.Fragment>
            <Container>
                <Row className='spaceLine' style={{margin:"60px 0px"}}>
                    <Col xs={3}>
                        <div className='lineHead1'>CUT Your Hair With Experts</div>
                        <div className='lineHead2'>Team Barbers</div>
                    </Col>
                    <Col xs={9}><hr className='Line'/></Col>
                </Row>
                <Row className='trrainer'>
                        <Card className='trainerCard'>
                            <Card.Img variant="top" src="img/barbers/1.png"/>
                            <Card.Body>
                                <div>Kevin Joy</div><br/>
                            </Card.Body>
                        </Card>
                        <Card className='trainerCard'>
                            <Card.Img variant="top" src="img/barbers/2.png"/>
                            <Card.Body>
                                <div>James Neely</div><br/>
                            </Card.Body>
                        </Card>
                    </Row>
            </Container>
        </React.Fragment>;
     }
}
 
export default Trainers;