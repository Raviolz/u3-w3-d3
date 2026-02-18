import { Container, Row, Col, ListGroup } from "react-bootstrap"

const Favorites = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4}>
            {" "}
            <h1> FAVORITES: </h1>
            <ListGroup as="ul" className="mt-5">
              <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
              <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
              <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Favorites
