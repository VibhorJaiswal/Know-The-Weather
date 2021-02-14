import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function WeatherComponent(props) {
  return (
    <Card className="text-center m-2 RoboText">
      <Card.Header style={{ backgroundColor: "#fff59c" }}>
        <strong>{props.data.name}</strong>
      </Card.Header>
      <Card.Body style={{ backgroundColor: "#fffa78" }}>
        <Card.Title>
          {props.data.description}
          <img width={50} height={50} src={props.data.weatherIcon} alt="" />
          {props.data.temp}°C
        </Card.Title>
        <Card.Text>
          Min: {props.data.temp_min}°C Max: {props.data.temp_max}°C
        </Card.Text>
        <Card.Text>Humidity: {props.data.humidity}</Card.Text>
        <Card.Text>
          Wind Speed: {props.data.speed} meter/sec at an angle of{" "}
          {props.data.deg}°
        </Card.Text>
      </Card.Body>
      <Card.Footer
        className="text-muted"
        style={{ backgroundColor: "#fff59c" }}
      >
        On ground it feels like its {props.data.feels_like}°C here
      </Card.Footer>
    </Card>
  );
}

export default WeatherComponent;
