import React from "react";
import {Card, Container, Image} from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container>
      <>
  <Card>
    <Card.Img variant="top" src="https://www.siteminder.com/wp-content/uploads/2020/07/08SMMK_changing-traveller-report_resource-centre-tile_es.jpg" />
    <h2 className="fw-bold">AMAZING TRAVELLER</h2>
    <Card.Body>
      <Card.Text>
      SiteMinder’s Changing Traveller Report 2020: Special COVID-19 Spain Edition.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Img variant="bottom" src="https://www.fcmtravel.com/sites/default/files/styles/large/public/Happy_traveller_Malaysia_skyline.jpg?itok=RDfWI6m8" />
    <h2 className="fw-bold">AMAZING TRAVELLER</h2>
    <Card.Body>
      <Card.Text>
      Business Travel: What might improve traveller satisfaction?
      </Card.Text>
    </Card.Body>
  </Card>
</>
      </Container>
    </div>
  );
};

export default About;
