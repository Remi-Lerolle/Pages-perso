import React from 'react';
import { Badge, Button, Card, Container, Stack } from 'react-bootstrap';


export function Project({data}) {

  return (<>
    <Container>
      <h1>{data.title}</h1>
    </Container>
    <Container>

    </Container>
  </>)
}

export function ProjectCard({ data }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Stack direction="horizontal" gap={2}>
          {data.technoList.map(
            t => {
              return (
                <React.Fragment key={`${t}-${data.title}-techno-bagde`}>
                  <Badge bg="info" className="mr-2">{t}</Badge>
                </React.Fragment>
              )
            })}
            </Stack>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  )
}