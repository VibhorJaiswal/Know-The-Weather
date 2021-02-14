import React, { Component } from "react";
import InputForCity from "./InputForCity";
import WeatherComponent from "./WeatherComponent";
import Loader from "./Loader";
import EmptyAlert from "./EmptyAlert";

/*Important details from api-----
main
description
temp
feels_like
temp_min
temp_max
humidity
wind: {speed, deg}
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
      showAlert: false,
      loading: false,
      visibile: false,
      main: "",
      description: "",
      temp: "",
      feels_like: "",
      temp_min: "",
      temp_max: "",
      humidity: "",
      speed: "",
      deg: "",
      weatherIcon: "",
      locationName: ""
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = (event) => {
    this.setState({ loading: true });
    const { name } = event.target;
    if (name === "searchLocation") {
      if (this.state.cityName === "") {
        this.setState({ showAlert: true });
        this.setState({ loading: false });
        return;
      } else this.setState({ showAlert: false });

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}
          &appid=${process.env.API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          const { main, description, icon } = data.weather[0];
          const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
          const { speed, deg } = data.wind;
          this.setState({
            loading: false,
            visibile: true,
            main,
            description,
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity,
            speed,
            deg,
            name: data.name,
            weatherIcon: `http://openweathermap.org/img/wn/${icon}@2x.png`
          });
        });
    }

    if (name === "getLocation") {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            const { main, description, icon } = data.weather[0];
            const {
              temp,
              feels_like,
              temp_min,
              temp_max,
              humidity
            } = data.main;
            const { speed, deg } = data.wind;
            this.setState({
              loading: false,
              visibile: true,
              showAlert: false,
              main,
              description,
              temp,
              feels_like,
              temp_min,
              temp_max,
              humidity,
              speed,
              deg,
              name: data.name,
              weatherIcon: `http://openweathermap.org/img/wn/${icon}@2x.png`
            });
          });
      });
    }
  };

  render() {
    return (
      <div>
        <EmptyAlert data={this.state.showAlert} />
        <InputForCity
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />

        {this.state.loading ? (
          <Loader />
        ) : this.state.visibile ? (
          <WeatherComponent data={this.state} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
