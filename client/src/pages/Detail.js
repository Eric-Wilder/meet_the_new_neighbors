import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
import API from "../utils/API";
import "./Styles/Details.css";

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
                Meet The {family.family} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          
          <Col size="md-12 ">
            <article>
              <h1> {family.family} Info</h1>
              <p>
               The {family.family} has {family.numAdults} adult(s). {family.adultsName}. {family.numKids} kid(s). {family.kidsName}. {family.numPets} pet(s). {family.petsName}.
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




