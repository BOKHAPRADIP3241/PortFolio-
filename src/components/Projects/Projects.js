import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import widrive from "../../Assets/Projects/Screenshot 2024-08-16 173309.png";
import crypto from "../../Assets/Projects/Presented by Pradip Bokha.png";
import askMe from "../../Assets/Projects/ask_me.png";
import randomVideo from "../../Assets/Projects/randomVideoCall.png";
import newsMonkey from "../../Assets/Projects/newss.png";
import rideSharing from "../../Assets/Projects/final .png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomVideo}
              isBlog={false}
              title="Random Video Calling"
              description="Random Video Calling App built with Java, Firebase, WebRTC, and Google Ads. Connect with new people through live video calls, earn video coins by watching ads, and enjoy seamless communication with WebRTC technology."
              ghLink="https://github.com/BOKHAPRADIP3241/RandomVideoCalling"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rideSharing}
              isBlog={false}
              title="Ride Sharing"
              description="Ride Sharing Android App built with Java, Firebase, and Google Maps API. Find and share rides easily with real-time chat communication, mobile OTP authentication, and integrated Google Maps for seamless navigation and ride tracking."
              ghLink="https://github.com/BOKHAPRADIP3241/RideSharingg"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={askMe}
              isBlog={false}
              title="ASK ME"
              description="Build a Voice Assistant with ChatGPT & DALL-E API. Create a smart voice assistant app using Flutter, integrating ChatGPT for natural language processing and DALL-E for AI image generation. Learn to implement REST APIs and design a stunning UI for a responsive, voice-controlled virtual assistant."
              ghLink="https://github.com/BOKHAPRADIP3241/ASK_ME"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={widrive}
              isBlog={false}
              title="WiDrive"
              description="Developed a hybrid WiFi and USB drive solution allowing users to upload files wirelessly without the physical drive. Built with React.js on the frontend, and Node.js with a MySQL database on the backend, it efficiently manages user data. Added an OTA feature on the website for seamless firmware updates."
              ghLink="https://widrive.vegg.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsMonkey}
              isBlog={false}
              title="News Live"
              description="Developed a dynamic news platform using React.js, integrated with the News API for real-time updates. Implemented pagination and category filtering to enhance user experience and streamline access to live news content."
              ghLink="https://github.com/BOKHAPRADIP3241/CryptoTrackerApp" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Tracker"
              description="Developed a Crypto Tracker app in Kotlin, leveraging the CoinCap API for real-time cryptocurrency data. Implemented price alerts, customizable watchlists, and streamlined access to key metrics to enhance user experience in tracking live market trends."
              ghLink="https://github.com/BOKHAPRADIP3241/E-Commerce-App"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
