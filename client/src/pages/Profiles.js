import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Profiles() {
  // Setting our component's initial state
  const [profiles, setProfiles] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all profiles and store them with setProfiles
  useEffect(() => {
    loadProfiles()
  }, [])

  // Loads all profiles and sets them to profiles
  function loadProfiles() {
    API.getProfiles()
      .then(res => 
        setProfiles(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a profile from the database with a given id, then reloads profiles from the db
  function deleteProfile(id) {
    API.deleteProfile(id)
      .then(res => loadProfiles())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveProfile method to save the profile data
  // Then reload profiles from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.lastName && formObject.firstName) {
      API.saveProfile({
        lastName: formObject.lastName,
        firstName: formObject.firstName,
        details: formObject.details
      })
        .then(res => loadProfiles())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Your  Profile</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="details"
                placeholder="Details (Optional)"
              />
              <FormBtn
                disabled={!(formObject.firstName && formObject.lastName)}
                onClick={handleFormSubmit}
              >
                Submit Profile
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Neighbor Profiles List</h1>
            </Jumbotron>
            {profiles.length ? (
              <List>
                {profiles.map(profile => (
                  <ListItem key={profile._id}>
                    <Link to={"/profiles/" + profile._id}>
                      <strong>
                        {profile.lastName} Profile
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteProfile(profile._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Profiles;
