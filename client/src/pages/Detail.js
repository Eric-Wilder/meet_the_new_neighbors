import React, { useEffect, useState } from "react";

// React-icons
import { BsBuilding } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";
import { IoInformationCircleSharp } from "react-icons/io5";

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
          <h2 className="resInfo"> {family.family} Resident Info <IoInformationCircleSharp /></h2>
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
            <p className="familyDetails">
              Email Address: <a href={`mailto:${family.email}`}>{family.email}</a>
            </p>
            <p className="familyDetails">
              Home Address: {family.address}
            </p>
            <p className="familyDetails">
              Number of Adults: {family.numAdults}
            </p>
            <p className="familyDetails">
              Name of Adults: {family.adultsName}
            </p>
            <p className="familyDetails">
              Number of Kids: {family.numKids}
            </p>
            <p className="familyDetails">
              Kid(s) Name(s): {family.kidsName}
            </p>
            <p className="familyDetails">
              Number of Pets: {family.numPets}
            </p>
            <p className="familyDetails">
              Pet Type/Name(s): {family.petsName}
            </p>
            <p className="familyDetails">
              Family Likes/Interests: {family.likes}
            </p>
            <p>
              <Link to="/">Back To Main Page</Link>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">

        </Col>
      </Row>
    </Container >
  );
}


export default Detail;




