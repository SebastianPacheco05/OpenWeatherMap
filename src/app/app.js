import React, { Component } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import {key} from "./keys";
import { renderToPipeableStream } from "react-dom/server";

class App extends Component {

  state = {
    temperature: "",
    description: "",
    humidity: "", 
    city: "",
    country: "",
    error: null
  }

  getWeather = async (event) => {
    event.preventDefault();
    const { city, country } = event.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${key}&units=metric`;
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    
    this.setState({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      city: cityValue,
      country: countryValue,
      error: null,
    });
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
