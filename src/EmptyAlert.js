import React from "react";
import { Alert } from "react-bootstrap";

function EmptyAlert(props) {
  return (
    <Alert className="text-center" show={props.data} variant="info">
      Please enter a city name
    </Alert>
  );
}

export default EmptyAlert;
