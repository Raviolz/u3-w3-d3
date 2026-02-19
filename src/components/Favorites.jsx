import { Container, Row, Col, ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"

const Favorites = () => {
  const list = useSelector((state) => state.favorites.list)

  //   const uniqueCompanies = []

  // list.forEach((job) => {
  //   const exists = uniqueCompanies.some(
  //     (j) => j.company_name === job.company_name
  //   )

  //   if (!exists) {
  //     uniqueCompanies.push(job)
  //   }
  // })

  const uniqueCompanies = list.filter((job, index, self) => index === self.findIndex((j) => j.company_name === job.company_name))

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h1>FAVORITES: {uniqueCompanies.length}</h1>

          <ListGroup as="ul" className="mt-4">
            {uniqueCompanies.map((job) => (
              <ListGroup.Item key={job._id} as="li">
                {job.company_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favorites
