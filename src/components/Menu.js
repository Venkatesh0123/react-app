import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BiryaniCard from './BiryaniCard';

const Menu = () => {
    return (
        <section id="menu" className="bg-secondary">
            <Container>
                <div className="text-center">
                    <h3 className="text-primary my-3 p-5">
                        Treat yourself with our Everyday Menu <i className="bi bi-stars"></i>
                    </h3>
                </div>
                <Row className="mx-5">
                    <Col md={6} lg={4}>
                        <BiryaniCard />
                    </Col>
                    <Col md={6} lg={4}>
                        <BiryaniCard />
                    </Col>
                    <Col md={6} lg={4}>
                        <BiryaniCard />
                    </Col>
                    <Col md={6} lg={4}>
                        <BiryaniCard />
                    </Col>
                    <Col md={6} lg={4}>
                        <BiryaniCard />
                    </Col>
                    <Col md={6} lg={4}>
                        <BiryaniCard />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Menu
