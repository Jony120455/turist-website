import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{height:'50vh'}} className="pt-5 mt-5 bg-dark text-light">
      <Container>
  <Row>
  
    <Col> 
    
    <i class="fas fa-map-marker-alt"></i> <p>Travel <span>World</span></p>
   
    <p>Travelers are always discoverers, especially those who travel by air. There are no signposts in the sky to show a man has passed that way before. There are no channels marked. The flier breaks each second into new uncharted seas.</p>
    </Col>
    <Col>
    <div>
      <h1>TAG CLOUD</h1>
    <div className="tag">
    <button>Adventure</button>
    <button>Tour</button>
    <button>Packge</button>
    <button>Vacation</button>
    </div>
    </div>
    </Col>
    <Col>
    <div>
    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
    <input type="text" />
    <div className="subscribe">
    <button>SUBSCRIBE</button>
    </div>
    </div>
    </Col>
  </Row>
</Container>   
    </div>
  );
};

export default Footer;
