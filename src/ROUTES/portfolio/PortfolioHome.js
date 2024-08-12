import React from "react";
import { Container, Card, Button, Badge } from "react-bootstrap";
import {FormalizzData} from "./Formalizz";
import { ProjectCard } from "./Project";

function PortfolioHome() {

  return (
    <>
      <Container>
        <h1>porfolio home</h1>
      </Container>
      <Container>
        <ProjectCard data={FormalizzData} />
      </Container>
    </>
  )
}

export default PortfolioHome