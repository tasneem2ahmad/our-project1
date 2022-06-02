import React from 'react';
import './App.css'
import Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

class Comp1 extends React.Component {
    render() { 
        return <div>
            <Row>
                    <Col>
<div className='component'>
    <img src="33bb48dcdaf0b1d8e7e5cdda0b78c0a3.jpg" alt="picerror" className='pic' />
    <br />
    <p className='shampo'>For Curly Hair</p>
    <p className='description'>
    </p>
    <div className='price'>
        <div >20 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="head-and-shoulders-anti-hair-fall-shampoo.jpg" alt="picerror" className='pic' />
    <br />
    <p className='shampo'>For Straight Hair</p>
    <div className='price'>
        <div >35 $</div>
    </div>
</div>
</Col>
<Col>
<div className='component'>
    <img src="58275308-2e39-4da5-bb90-dc1d92fbb096.00e11ac68cd140794e7caa71d3a95c74.jpeg" alt="picerror" className='pic' />
    <br />
    <p className='protein'>Night Cream</p>
    <div className='price'>
        <div >10 $</div>
    </div>
</div>
</Col>
</Row>
        </div>;
    }
}
 
export default Comp1;