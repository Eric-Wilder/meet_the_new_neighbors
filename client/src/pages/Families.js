import React, { useState, useEffect } from "react";
// React-icons
import { HiUserGroup } from "react-icons/hi";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./Styles/Families.css";
import FamilyData from "../components/Table"
import Profile from '../components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import ReactCalendar from "./Calendar";


function Families() {
  // Setting our component's initial state
  const [families, setFamilies] = useState([])
  const [formObject, setFormObject] = useState({})
 
  const { user, isAuthenticated } = useAuth0();

  // Load all families and store them with setFamilies
  useEffect(() => {
    loadFamilies()
  }, [])

  // Loads all families and sets them to families
  function loadFamilies() {
    
    API.getFamilies()
      .then(res =>
        setFamilies(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  // When the form is submitted, use the API.saveFamily method to save the family data
  // Then reload families from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.family && formObject.address) {
      API.saveFamily({
        family: formObject.family,
        email: formObject.email,
        address: formObject.address,
        numAdults: formObject.numAdults,
        adultsName: formObject.adultsName,
        numKids: formObject.numKids,
        kidsName: formObject.kidsName,
        numPets: formObject.numPets,
        petsName: formObject.petsName,
        likes: formObject.likes,
        photo: formObject.photo,
      })
        .then(res => loadFamilies())
        .catch(err => console.log(err));
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">

          <Profile />
          <Jumbotron />

        </Col>
      </Row>
      {isAuthenticated &&
        <Row>
          <Col size="md-6">
            <h2 className="resInfo">Enter Residents Info. Below <IoInformationCircleSharp /></h2>
            <form className="res-form">
              <Input
                onChange={handleInputChange}
                name="family"
                placeholder="Residents Name(required)"

              />

              <Input
                onChange={handleInputChange}
                name="email"
                placeholder= "Make Sure You Use The Email You Sign Up With"
                // value= {user.email}
              />

              <Input
                onChange={handleInputChange}
                name="address"
                placeholder="Home Address (required)"
              />

              <Input
                onChange={handleInputChange}
                name="numAdults"
                placeholder="Number of Adults"
              />

              <Input
                onChange={handleInputChange}
                name="adultsName"
                placeholder="Adults Name(s)"
              />

              <Input
                onChange={handleInputChange}
                name="numKids"
                placeholder="Number of Kids"
              />

              <Input
                onChange={handleInputChange}
                name="kidsName"
                placeholder="Kids Name(s)"
              />

              <Input
                onChange={handleInputChange}
                name="numPets"
                placeholder="Number of Pets"
              />

              <Input
                onChange={handleInputChange}
                name="petsName"
                placeholder="Pets Type and Name(s)"
              />

              <TextArea
                onChange={handleInputChange}
                name="likes"
                placeholder="Family Likes / Interests"
              />

              <Input
                onChange={handleInputChange}
                name="photo"
                placeholder="Copy/Paste URL of Resident Photo"
              />

              <button
                type="button" className="resBtn btn btn-primary" 
                disabled={!(formObject.address && formObject.family)}
                onClick={handleFormSubmit}>
                Add Residents
            </button>

            <Link to="/Calendar">
            <button
              type="button" className="resBtn btn btn-primary">
              Calendar
            </button>
            </Link>

            </form>
          </Col>
          <Col size="md-6 sm-12">
            <h2 className="resInfo">Justice Community Residents <HiUserGroup /></h2>
            <FamilyData families={families} />


            <h2 className="resInfo">Meet The Residents <FaComments /></h2>
            {families.length ? (
              <List>
                {families.map(family => (
                  <ListItem key={family._id}>
                    <Link to={"/families/" + family._id}>
                      <strong>
                        {family.family}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h2 className="resInfo">No Results to Display</h2>
              )}
          </Col>
        </Row>}
    </Container>
  );
}

export default Families;
