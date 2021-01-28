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
import { Input, TextArea, FormBtn, UpdateBtn, MainBtn } from "../components/Form";
import Profile from '../components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import FamilyData from "../components/Table";


function Detail(props) {
  const [family, setFamily] = useState({
    email: "",
    address: "",
    numAdults: "",
    adultsName: "",
    numKids: "",
    kidsName: "",
    numPets: "",
    petsName: "",
    likes: "",
    photo: "",
  })
  const { user, isAuthenticated } = useAuth0();
  // const { Admin } = "malcolmyates34@gmail.com";
  // console.log(Admin);


  // When this component mounts, grab the resident with the _id of props.match.params.id

  const { id } = useParams()
  useEffect(() => {
    console.log(user)
    API.getFamily(id)
      .then(res => setFamily(res.data))
      .catch(err => console.log(err));
  }, [])

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFamily({ ...family, [name]: value })
  };

  function handleFormUpdate(event) {
    event.preventDefault();
    API.updateFamily(family._id, family)
      .then(({ data }) => {
        setFamily(data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Profile />
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
            <form className="res-form">
              <p className="familyDetails">
                Email Address: <a href={`mailto:${family.email}`}>{family.email}</a>
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="email"
                  value={family.email}
                />
              ) : ""}

              <p className="familyDetails">
                Home Address: {family.address}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="address"
                  value={family.address}
                /> ) : ""}


              <p className="familyDetails">
                Number of Adults: {family.numAdults}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="numAdults"
                  value={family.numAdults}
                /> ) : ""}

              <p className="familyDetails">
                Name of Adults: {family.adultsName}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="adultsName"
                  placeholder={family.adultsName}
                />
              ) : ""}


              <p className="familyDetails">
                Number of Kids: {family.numKids}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="numKids"
                  value={family.numKids}
                />
              ) : ""}


              <p className="familyDetails">
                Kid(s) Name(s): {family.kidsName}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="kidsName"
                  value={family.kidsName}
                />
              ) : ""}


              <p className="familyDetails">
                Number of Pets: {family.numPets}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="numPets"
                  value={family.numPets}
                />
              ) : ""}


              <p className="familyDetails">
                Pet Type/Name(s): {family.petsName}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="petsName"
                  value={family.petsName}
                />
              ) : ""}


              <p className="familyDetails">
                Family Likes/Interests: {family.likes}
              </p>
              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="likes"
                  value={family.likes}
                />
              ) : ""}

              {user.email === family.email ? (
                <Input
                  onChange={handleInputChange}
                  name="photo"
                  placeholder="Copy/Paste URL of Resident Photo"
                />
                ) : ""}


              {user.email === family.email ? (
                <button
                  type="button" className="updateBtn btn btn-primary" style={{ float: "left", marginBottom: 10 }}
                  onClick={handleFormUpdate}>
                  Update
                </button>
              ) : ""}

            </form>
            <button type="button" className="backBtn btn btn-primary text-right" style={{ float: "right", marginBottom: 10 }} >
              <Link className="color" to="/">Go Back</Link>
            </button>
          </div>
        </Col>
      </Row>
    </Container >
  );
}


export default Detail;


