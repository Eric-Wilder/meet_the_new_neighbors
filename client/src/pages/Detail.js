import React, { useEffect, useState } from "react";

// React-icons
import { BsBuilding } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";

import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./Styles/Details.css";

function Detail(props) {
  const [family, setFamily] = useState({})

  // When this component mounts, grab the resident with the _id of props.match.params.id

  const { id } = useParams()
  useEffect(() => {
    API.getFamily(id)
      .then(res => setFamily(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1><BsBuilding /> Welcome To the Justice Community <RiCommunityLine /></h1>
          <Jumbotron>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <h1> {family.family} Resident Info</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-4">
          <div>
            <img className="familyImage rounded float-right" src={family.photo} alt="family photo image" />
          </div>
        </Col>
        <Col size="md-8 ">
          <div>
            <p>
              The {family.family} Residence has {family.numAdults} Adult(s)
            </p>
            <p> Adult Name(s): {family.adultsName} 
            </p>
            <p>Number of Kids: {family.numKids} kid(s)
            </p>
            <p> Kid(s) Name(s): {family.kidsName}
            </p>
            <p> Number of Pets: {family.numPets}
            </p>
            <p> Pet(s) Names: {family.petsName}
            </p>
            <p>
              Family Likes: {family.likes}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">←Home</Link>
        </Col>
      </Row>
    </Container >
  );
}


export default Detail;




