import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  faBookmark,
  faUserCircle,
  faComments
} from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { IconContainer } from "./homepage.styles";

function ListItem({ icon, text }) {
  return (
    <div class="d-flex mt-4 mb-4">
      <span className="fa-fw mr-5">
        <IconContainer icon={icon} />
      </span>
      <h5 className="font-weight-bold">{text}</h5>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="vh-100 d-flex flex-column">
      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          <Col
            md={6}
            className="h-100 order-md-2 d-flex flex-column align-items-center justify-content-center"
          >
            <div className="w-75">
              <IconContainer
                isLarge
                icon={faTwitter}
                className="text-primary mb-2"
              />
              <h3 className="font-weight-bold">
                See what’s happening in the world right now
              </h3>
              <h5 className="mt-5 mb-3 font-weight-bold">Join flocks today.</h5>
              <Button block className="mb-3 rounded">
                Sign Up
              </Button>
              <Button block variant="outline-primary">
                Log In
              </Button>
            </div>
          </Col>
          <Col
            md={6}
            className="bg-primary h-100 d-flex flex-column align-items-center justify-content-center text-white"
          >
            <div className="w-75">
              <ListItem icon={faBookmark} text="Follow your interests." />
              <ListItem
                icon={faUserCircle}
                text="Hear what people are talking about."
              />
              <ListItem icon={faComments} text="Join the conversation." />
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="pt-3 pb-3 border-top text-center">
        <span className="text-muted">
          Made by <a href="http://github.com/diazabdulm">Abdul Diaz</a>
        </span>
      </footer>
    </div>
  );
}
