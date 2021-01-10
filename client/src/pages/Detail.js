import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [profile, setProfile] = useState({})

  // When this component mounts, grab the profile with the _id of props.match.params.id
  const {id} = useParams()
  useEffect(() => {
    API.getProfile(id)
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {profile.lastName} Profile
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Neighbor Profile Information</h1>
              <p>
                {profile.details}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Profiles List</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
