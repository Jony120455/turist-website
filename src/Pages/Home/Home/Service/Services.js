import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div>
            <Container>
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqe-EEFraL79UT8wJmaDUCQDRXj4kNmbFu-Q&usqp=CAU" />
        <Card.Body>
          <Card.Title className="fw-bold">Adventure Madness</Card.Title>
          <Card.Text>
          We provide personalized service to our clients. Crafted experience according to your will. Private tours are also available.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
            </Container>
        </div>
    );
};

export default Services;