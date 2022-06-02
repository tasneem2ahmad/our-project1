import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Carouselimage extends React.Component {
    render() { 
        return <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <img
                    className=" w-100 Carousel-img"
                    src="img/carousel/banner.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>YOUR HAIR</h3>
                    <p>JUST BECOME BETTER </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </React.Fragment>;
    }
}
 
export default Carouselimage;