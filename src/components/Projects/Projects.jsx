import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nightCrawl from "../../Assets/Projects/nightCrawl.png";
import apexLegends from "../../Assets/Projects/apexLegends.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few full-stack projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nightCrawl}
              isBlog={false}
              title="SLC NIGHT CRAWL"
              description="A developed site to unite people by following a route that others have created. Users can create/login to account to access available crawls. All this is powered by google static maps API."
              ghLink="https://github.com/josemolinaf22/barCrawl-capstone"
              demoLink="https://www.youtube.com/watch?v=NwhH6Pkd-M0&t=50s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apexLegends}
              isBlog={false}
              title="Apex Legends Favorite List"
              description="A developed interactive website using basic HTML, CSS, and Javascript to provide a simple user experience. I Created a local database to hold data on the server side."
              ghLink="https://github.com/josemolinaf22/ApexLegendCapstone"
              demoLink="https://www.youtube.com/watch?v=UF0n1q02NmU&t=15s"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
