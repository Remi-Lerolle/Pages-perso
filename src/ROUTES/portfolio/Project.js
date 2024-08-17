import React from 'react';
import { Badge, Button, Card, Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
        <Button className="bg-info border-0 mt-2">
          <Link
            className='text-white text-decoration-none'            
            to={data.projectPath} 
            >
            {data.title}
          </Link>
        </Button>
      </Card.Body>
    </Card>

  )
}