import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
import API from "../utils/API";
import "./Styles/Details.css";

function Detail(props) {
  const [family, setFamily] = useState({})

  // When this component mounts, grab the resident with the _id of props.match.params.id
  
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
          <h1>Welcome To the Justice Community</h1>
            <Jumbotron>
              
            </Jumbotron>
            <h1>Meet The {family.family} Residents</h1>

          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          
          <Col size="md-12 ">
            <div>
              <h1 className= "resInfo"> {family.family} Resident Info</h1>
              <p>
               The {family.family} Resident has {family.numAdults} adult(s). {family.adultsName}. {family.numKids} kid(s). {family.kidsName}. {family.numPets} pet(s). {family.petsName}.
              </p>
              
            </div>
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




