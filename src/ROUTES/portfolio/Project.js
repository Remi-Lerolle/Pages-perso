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
      <Card.Header>
        <Card.Title>{data.title}</Card.Title>
      </Card.Header>
      <Card.Img variant="top" src={data.imgUrl} />
      <Card.Body>
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