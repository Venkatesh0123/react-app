import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const BiryaniCard = () => {
    return (
        <Card className="m-3 rounded">
      <img variant="top" src={require('../assets/biryaniCard.jpg')} alt="BiryaniCard" className="rounded" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="text-center">
        <Button variant="primary">Add to Cart</Button>
        </div>        
      </Card.Body>
    </Card>
    )
}

export default BiryaniCard
