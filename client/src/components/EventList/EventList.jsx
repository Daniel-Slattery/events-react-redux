import React from 'react'
import './EventList.css'
import SingleEvent from '../SingleEvent/SingleEvent'


const EventList = ({events}) => {
  return (
    <div className='EventList'>
      Event List Here
      {events.map((event) => (
        <SingleEvent id={event.id} date={event.date} title={event.title} location={event.location}/>
      ))}
    </div>
  )
}

export default EventList
