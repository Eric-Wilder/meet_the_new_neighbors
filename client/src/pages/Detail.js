import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [family, setFamily] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getFamily(id)
      .then(res => setFamily(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {family.family} on {family.address}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article>
              <h1> {family.family} Info</h1>
              <p>
              <h2> Adults Of The House</h2>
                {family.adultsName}
              </p>
              <p>
                {family.kidsName}
              </p>
              <p>
                {family.petsName}
              </p>
              <p>
                {family.likes}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">←Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;




