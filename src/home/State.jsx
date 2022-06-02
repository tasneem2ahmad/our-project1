import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class State extends React.Component {
    render() { 
        return <React.Fragment>
            <Container className='state' fluid style={{background: "rgb(27,37,47)",marginTop:"20px"}}>
                <Row>
                    <Col xs={5}>
                         
                    </Col>
                    <Col>
                        <div className='lineHead1'>What We Offer</div>
                        <br></br>
                        <br></br>
                    </Col>
                    <Col xs={5}>
                        
                    </Col>
                </Row>
                <Row style={{margin:"0px 80px", padding:"20px 0px", color:"white"}}>
                    <Col>
                        <div className='stateFont1'>CLEAN SHAVE</div><br/>
                        <div  className='stateFont2'>The Easy Guide for a Smoother, Safer Beard Trim</div>
                    </Col>
                    <Col>
                        <div className='stateFont1'>HAIRCUT STYLES</div><br/>
                        <div className='stateFont2'>Here are a wide variety of long and short haircuts available for the modern man.</div>

                    </Col>
                    <Col>
                        <div className='stateFont1'>FACE MASKING</div><br/>
                        <div className='stateFont2'>Keep your skin feeling fresh and flawless with our range of professional face masks and serums.</div>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>;
    }
}
 
export default State;