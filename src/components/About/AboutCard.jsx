import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My work ethic would be described as{" "}
            <i>
              <b className="purple">dedicated</b>
            </i>{" "}
            and{" "}
            <i>
              <b className="purple">determined</b>
            </i>
            . I have an exceptional ability to retain new information. Even in
            stressful situations, I maintain a{" "}
            <i>
              <b className="purple">positive attitude</b>
            </i>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Active Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Entertainment Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            The most damaging phrase in the language is "It's always been done
            this way"{" "}
          </p>
          <footer className="blockquote-footer">Grace Hopper </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
