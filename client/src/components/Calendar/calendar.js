import React, {useState} from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Profile from '../components/Profile';

/// declare react calendar
const ReactCalendar = () => {
  const [date, setDate]= useState(new Date());

/// specify date variable in the function
const onChange = date => {
  setDate(date);
};

import React, {Component} from 'react'
import '../App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class EventCalendar extends Component {
  render() {
    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'Community Event at 7pm!', date: '2021-22-01' },
          { title: 'Community Event at 9pm!', date: '2021-01-02' }
        ]}
      />
    )
  }
}

///return calendar to render output
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
    <header className="header">Community Calendar</header>
    <Calendar onChange={onChange} value={date} /> 
    {console.log(date)}
    {date.toString()}
  </div>
      </Col>
      </Row>
    </Container >
  );
};

render(<ReactCalendar />, document.querySelector("#root"));

export default ReactCalendar;
