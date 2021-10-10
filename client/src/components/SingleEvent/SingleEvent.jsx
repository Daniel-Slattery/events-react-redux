import React from 'react'
import { useDispatch } from 'react-redux';
import './SingleEvent.css'

const SingleEvent = ({title, location, date, id}) => {

  const dispatch = useDispatch();

  const deleteEvent = () => {
    dispatch({ type: 'event/deleted', id })
  }

  return (
    <div className='SingleEvent'>
      {`${title}, ${location}, ${date}`}
      <button onClick={deleteEvent}>🗑️</button>
    </div>
  )
}

export default SingleEvent
