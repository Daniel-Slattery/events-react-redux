import { Provider, useSelector } from 'react-redux';
import "./App.css";
import React, { useState, useEffect } from "react";
import store from './store';
import EventList from "./components/EventList/EventList";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";

const getEvents = function () {
  console.log("Getting Events");
};

function App() {

  const events = useSelector(state => state)
  console.log('state', events)

  // store.subscribe(() => console.log('new state', store.getState()))

  return (
    <div className="App">
      <Header />
      <div className="container">
        <EventList events={events}/>
        <InputForm events={events}/>
      </div>
    </div>
  );
}

export default App;
