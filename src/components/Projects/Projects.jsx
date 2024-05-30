import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nightCrawl from "../../Assets/Projects/nightCrawl.png";
import apexLegends from "../../Assets/Projects/apexLegends.png";
import soccerHub from "../../Assets/Projects/soccerHub.jpg";
import jqProject from "../../Assets/Projects/jqueryProject.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few full-stack projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soccerHub}
              isBlog={false}
              title="The Soccer Hub"
              description="I developed a social media platform using the T3 tech stack (Next.js, React, Prisma, and Tailwind) to unite ex-high school soccer players or enthusiasts for pick-up soccer communication."
              ghLink="https://https://github.com/josemolinaf22/soccerHub"
              demoLink="https://soccer-hub.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nightCrawl}
              isBlog={false}
              title="SLC NIGHT CRAWL"
              description='Developed a platform that unites users by following "crawls" through the city created by others, utilizing the Google Static Maps API to show the locations to meet. Implemented user account creation and login functionality for privacy and to access available crawls.'
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
         <h1 className="project-heading">
          <strong className="purple">Learning Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jqProject}
              isBlog={false}
              title="Simon game using jQuery"
              description="Developed a game utilizing HTML, CSS, JavaScript, and jQuery to get an understanding on jQuery. Successfully implemented the game with jQuery, streamlining the development process significantly."
              ghLink="https://codesandbox.io/s/simongame-j685xe"
              demoLink="https://j685xe.csb.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
