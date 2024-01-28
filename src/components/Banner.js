import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Container fluid className="bg-light rounded">
            <Row className="justify-content-center align-items-center">
                <Col lg={8}>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img src={require('../assets/ComputerApplication.jpg')} alt="Loading" className="d-block w-100" text="First slide" />
                            <Carousel.Caption>
                                <h3>Computer Programming</h3>
                                <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={require('../assets/SolarPanel.jpg')} alt="Loading" className="d-block w-100" text="Second slide" />
                            <Carousel.Caption>
                                <h3>Solar Panel</h3>
                                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={require('../assets/Helper.jpg')} alt="Loading" className="d-block w-100" text="Third slide" />
                            <Carousel.Caption>
                                <h3>Helper</h3>
                                <p className="d-none d-sm-block">
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <div className="text-center mt-3">
                <h2 className="display-6">All Services from One place that is Global Service Provider</h2>
                <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </Container>

    )
}

export default Banner
