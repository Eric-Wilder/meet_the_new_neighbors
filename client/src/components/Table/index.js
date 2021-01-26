import React from "react";
import { MDBDataTable } from "mdbreact";


const FamilyData = (props) => {
  const data = {
    columns: [
      {
        label: "Residents",
        field: "family",
        sort: "asc",
        width: 500,
        },
      {
        label: "# of Adults",
        field: "numAdults",
        sort: "asc",
        width: 500,
      },
      {
        label: "# of Kids",
        field: "numKids",
        sort: "asc",
        width: 500,
      },
      {
        label: "# of Pets",
        field: "numPets",
        sort: "asc",
        width: 500,
      },
    ],
    rows:
      // link: '<router-link to="http://localhost:3000/families/">Bat</router-link>',
      props.families
  };
  console.log("Props", props.families);
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default FamilyData;
