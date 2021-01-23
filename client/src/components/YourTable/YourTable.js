import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";

// import "./Styles/Details.css";

function YourTable(props) {
    const [family, setFamily] = useState({})
  
    // When this component mounts, grab the resident with the _id of props.match.params.id
  
    const { id } = useParams()
    useEffect(() => {
      API.getFamily(id)
        .then(res => setFamily(res.data))
        .catch(err => console.log(err));
    }, [])
  
    return (

  <table>
    <thead>
      <tr>
        <th>Email Address</th>
        <th>Home Address</th>
        <th>Number of Adults</th>
        <th>Name of Adults</th>
        <th>Number of Kids:</th>
        <th>Kid(s) Name(s):</th>
        <th>Number of Pets</th>
        <th> Pet Type/Name(s)</th>
        <th> Family Likes/Interests</th>
        <th> Edit</th>
        

      </tr>
    </thead>
    <tbody>
     
          <tr key={family._id}>
            <td>{family.email}</td>
            <td>{family.address}</td>
            <td>{family.numAdults}</td>
            <td>{family.adultsName}</td>
            <td>{family.numKids}</td>
            <td>{family.kidsName}</td>
            <td>{family.numPets}</td>
            <td>{family.petsName}</td>
            <td>{family.likes}</td>
            <td>
              <button className="button muted-button">Edit</button>
            </td>
          </tr>
     
      
    </tbody>
  </table>
)
      }
      

export default YourTable;