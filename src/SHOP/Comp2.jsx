import React, { Component } from 'react';
import './App.css'
import Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

class  Comp2 extends React.Component {

    render() { 
        return <div>
            <Row>
                    <Col>
<div className='component'>
    <img src="matrix_012_1.jpg" alt="picerror" className='pic' />
    <br />
    <p className='serum'>Serum</p>
    <div className='price'>
        <div >50 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="OIP.jfif" alt="picerror" className='pic' />
    <br />
    <p className='Cream'>Light Cream</p>
    
    <div className='price'>
        <div >45 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="products-for-hair-breakage.jpg" alt="picerror" className='pic' />
    <div className='txt'>
        <br />
        <p className='protein'>Advanced Shampo</p>
        
        <div className='price'>
            <div >7.5 $</div>
        </div>
    </div>
</div>
</Col>
</Row>
        </div>;
    }
}
 
export default Comp2;