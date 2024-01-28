import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BiryaniCard from './Services/BiryaniCard';
import Securities from './Services/Securities';
import Cleaning from './Services/Cleaning';
import Electronics from './Services/Electronics';
import SolarPanel from './Services/SolarPanel';

const Menu = () => {
    return (
        <section id="menu" className="bg-secondary">
            <Container>
                <div className="text-center">
                    <h1 className="text-primary my-3 p-5">
                        Our Services
                    </h1>
                </div>
                <Row className="mx-5">
                    <Col md={6} lg={4}>
                        <BiryaniCard />
                    </Col>
                    <Col md={6} lg={4}>
                        <Securities />
                    </Col>
                    <Col md={6} lg={4}>
                        <Cleaning />
                    </Col>
                    <Col md={6} lg={4}>
                        <Electronics />
                    </Col>
                    <Col md={6} lg={4}>
                        <SolarPanel />
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
