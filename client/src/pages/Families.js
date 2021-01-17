import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./Styles/Families.css";
import FamilyData from "../components/Table"

function Families() {
  // Setting our component's initial state
  const [families, setFamilies] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
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
        <h1>Welcome To the Justice Community</h1>
          <Jumbotron>  
          </Jumbotron>

        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <h2 className= "resident-text">Enter Residents Info. Below:</h2>
          <form className= "res-form">
            <Input
              onChange={handleInputChange}
              name="family"
              placeholder="Residents Name(required) Ex: Johnson Residents"
            />
            <Input
              onChange={handleInputChange}
              name="address"
              placeholder="Address (required)"
            />
            <Input
              onChange={handleInputChange}
              name="numAdults"
              placeholder="# of Adults"
            />

            <Input
              onChange={handleInputChange}
              name="adultsName"
              placeholder="Adults Name"
            />
            <Input
              onChange={handleInputChange}
              name="numKids"
              placeholder="# of Kids"
            />

            <Input
              onChange={handleInputChange}
              name="kidsName"
              placeholder="Kids Name"
            />
            <Input
              onChange={handleInputChange}
              name="numPets"
              placeholder="# of Pets"
            />

            <Input
              onChange={handleInputChange}
              name="petsName"
              placeholder="Pets Type and Name"
            />
            <TextArea
              onChange={handleInputChange}
              name="likes"
              placeholder="Family Likes and Interest"
            />
            
            <label class="form-label" for="familyPhoto">Input Photo of Residents</label>
            <input type="file" class="form-control" id="familyPhoto" name="familyPhoto" />
            <FormBtn
              disabled={!(formObject.address && formObject.family)}
              onClick={handleFormSubmit}
            >
              Add Residents
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <h2 className= "resident-text">Justice Community Residents:</h2>
          <FamilyData families={families} />


          <h2 className= "resident-text">Meet The Residents:</h2>
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
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Families;
