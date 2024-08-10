import { React, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Techno } from "../../Classes/TechnoClasses"

export default function Formalizz() {
  let techno = new Techno();
  techno.addTechnoFromList( [ "PHP", "SQL"])

  return (
    <>
    <Container>
      <h1>Formalizz</h1>
    </Container>
    <Container>

    </Container>
    </>
  )
}