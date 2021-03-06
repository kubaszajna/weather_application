import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';

// Klucz do API
const APIKey = 'a86ff4182f219864ccf577722d46ccdb';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: 'false',
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()
    const API =
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState(prevState => ({
          error: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: this.state.value,
        }))
      })
      .catch(error => {
        console.log(error);
        this.setState(prevState => ({
          error: true,
          city: prevState.value
        }))
      })
  }

  render() {
    return (
      <div className="App" >
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;