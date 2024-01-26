import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const PickOfTheWeek = () => {
    return (
        <section id="musttry" className="my-3">
            <div className="text-center m-2 p-3">
                <h2 className="display-5 text-primary"><i className="bi bi-search-heart"></i> Pick of the Week!</h2>
            </div>
            <Container>
                <Row className="align-items-center">
                    <Col md={7}>
                        <Image src={require('../assets/mustTryBiryani.jpg')} fluid={true} alt="MustTryBiryani">

                        </Image>
                    </Col>
                    <Col md={5}>
                        <div className="p-3">
                            <h2 className="h1">Prawn Biryani</h2>
                            <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button variant="primary" className="text-light">
                            <i className="bi bi-basket-fill"></i> Buy Now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default PickOfTheWeek
