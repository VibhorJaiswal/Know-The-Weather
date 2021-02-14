import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./style.css";

function InputForCity(props) {
  return (
    <div className="m-4">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="City Name"
          aria-label="City Name"
          aria-describedby="basic-addon2"
          onChange={props.handleChange}
          name="cityName"
        />
        <InputGroup.Append>
          <Button
            name="searchLocation"
            onClick={props.handleClick}
            variant="outline-success"
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <hr className="hr-text" data-content="OR" />
      <div className="text-center">
        <Button
          name="getLocation"
          onClick={props.handleClick}
          variant="success"
        >
          Get my location
        </Button>
      </div>
    </div>
  );
}

export default InputForCity;
