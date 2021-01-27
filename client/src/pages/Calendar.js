import React, {useState} from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from "../components/Grid";



/// declare react calendar
function ReactCalendar(){ 
  const [date, setDate]= useState(new Date());

/// specify date variable in the function
const onChange = date => {
  setDate(date);
};

///return calendar to render output
  return (
<Container fluid>
    <Row>
        <Col size="md-12">
            <Jumbotron />
        </Col>
    </Row>
    <div>
    <header className="header">Community Calendar</header>
    <Calendar onChange={onChange} value={date} /> 
    {console.log(date)}
    {date.toString()}
  </div>
</Container>
  );
};

render(<ReactCalendar />, document.querySelector("#root"));

export default ReactCalendar;
