import React from 'react'
import Card from 'react-bootstrap/Card';

const Cleaning = () => {
    return (
        <Card className="m-3 rounded">
         <img variant="top" src={require('F:/Venkatesh/Projects/react-app/src/assets/ComputerApplication.jpg')} alt="BiryaniCard" className="rounded" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>   
         </Card.Body>
       </Card>
       )
}

export default Cleaning