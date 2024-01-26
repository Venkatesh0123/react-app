import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../css/appFooter.css";


//to display year in copyrights
let dateobj = new Date();
const currentYear = dateobj.getFullYear();
// const currentDay = dateobj.getDate();
// const currentMonth = dateobj.getMonth();

//back to top button
// let toTopBtn = document.getElementById("toTopBtn");
let rootElement = document.documentElement;

const scrollToTop = () => {
    rootElement.scrollTo({
        top : 0,
        behavior: "smooth"
    })
}

// toTopBtn.addEventListener("click",scrollToTop);


const AppFooter = () => {
    return (
        <>
        <Container fluid>
            {/* // <div className="h-50 bg-secondary"> */}
             <Row className="justify-content-md-center bg-secondary px-5 py-4">
                    <Col  className="md-4">
                    <h5 className="text-dark"> Useful Links</h5>
                    <a href="#home" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Home</a>
                    <a href="#menu" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Menu</a>
                    <a href="#musttry" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Must Try</a>
                    <a href="#contactus" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Contact Us</a>
                    </Col>
                    <Col  className="md-4">
                    <h5 className="text-dark"> Our Services</h5>
                    <a href="#" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Cattering</a>
                    <a href="#" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Bulk orders</a>
                    <a href="#" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Dine in</a>
                    <a href="#" className="d-block text-decoration-none"><i className="bi bi-arrow-right"></i> Take away</a>
                    </Col>
                    <Col  className="md-4">
                    <h5 className="text-dark"> Follow us on</h5>
                    <a href="#" className="d-block text-decoration-none"><i className="bi bi-facebook"></i> FaceBook</a>
                    <a href="#" className="d-block text-decoration-none"><i className="bi bi-instagram"></i> Instagram</a>
                    <a href="#" className="d-block text-decoration-none"><i className="bi bi-twitter"></i> Twitter</a>
                    {/* <a href="#contactus" className="d-block"><i class="bi bi-arrow-right"></i> Contact Us</a> */}
                    </Col>

                    </Row>
                    
            {/* </div> */}
            <div class="fixed-bottom text-end me-1 mb-5">
            <Button onClick={scrollToTop} variant="primary" className="rounded-circle" id="toTopBtn"><i className="bi bi-arrow-up-circle h2 text-light"></i></Button>
            </div>

         </Container>
         <div className="text-center">
         <p className="text-light bg-dark m-0">
         <i className="bi bi-c-circle"></i> CopyRight {currentYear}  Restaurant. All rights reserved.
         </p>
         </div>
         </>
    )
}

export default AppFooter
