import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Classcard from './Classcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
class Classcontent extends React.Component {
    render() { 
        return <React.Fragment>

            <Row className='spaceLine'>
                <Col xs={2}>
                    <div className='lineHead1'>What We Offer</div>
                    <div className='lineHead2'>Our Service</div>
                </Col>
                <Col xs={10}><hr className='Line'/></Col>
            </Row>
            <Container>
            <Row>
                <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/ser1.png" alt="Clean Shave"/></Col>
                <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/ser.png" alt="Haircut Styles"/></Col>
                <Col lg={4} md={12} sm={12}><Classcard imageName="img/classCard/ser3.png" alt="Face Masking"/></Col>
            </Row><br/><br/>
            </Container>
           <button><a href = "/contact">Book Now</a></button>
            
        </React.Fragment>;
    }
}
 
export default Classcontent;