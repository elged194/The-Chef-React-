import React from "react";
import "./Our-News.css";
import { Row, Col, Card } from "react-bootstrap";
import img1 from "../images/footer-open-hour-bg.jpg";
import img2 from "../images/menu-image3.jpg";
import img3 from "../images/menu-image2.jpg";

function OurNews() {
  return (
    <section className="container ">
      <div className="text-center">
        <h1>
          <span>Our</span> News
        </h1>
        <p>A well-known quote, contained in a blockquote element.</p>
        <div className="blockquote-footer pt-2">Someone famous in Title</div>
      </div>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="card-our-news">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="card-our-news">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="card-our-news">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default OurNews;
