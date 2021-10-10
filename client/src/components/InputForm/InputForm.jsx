import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import './InputForm.css'

const InputForm = ({events}) => {

  const dispatch = useDispatch();

  const [id, setId] = useState(events.length + 1);
  const [inputs, setInputs] = useState({id: id, title: '', date: '', location: ''});

  const onChangeHandler = event => setInputs(prevState => ({ ...prevState, id: id, [event.target.name]: event.target.value }));

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Add Event Button Clicked');
    setInputs(prevState => ({ ...prevState, id: id, [event.target.name]: event.target.value }));
    dispatch({ type: 'event/added', inputs })
  };

  return (
    <form className='InputForm' onSubmit={handleSubmit}>
      <label>
        Title:
      <input type="text" className='inputBox titleInput' name='title' placeholder='Title' onChange={onChangeHandler} value={inputs.title} />
      </label>
      <label>
        Date:
      <input type="date" className='inputBox dateInput' name='date' placeholder='Date' onChange={onChangeHandler} value={inputs.date}/>
      </label>
      <label>
        Location:
      <input type="text" className='inputBox locationInput' name='location' placeholder='Location' onChange={onChangeHandler} value={inputs.location}/>
      </label>
      <button type='submit' onClick={() => {setId(id + 1)}}> Add Event ✔️</button>
    </form>
  )
}

export default InputForm
