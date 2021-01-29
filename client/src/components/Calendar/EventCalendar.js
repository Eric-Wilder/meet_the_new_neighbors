import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import goBack from './goBack';
import Jumbotron from '../Jumbotron';

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
