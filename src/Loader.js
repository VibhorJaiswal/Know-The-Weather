import React from "react";
import { Button, Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div className="text-center p-4">
      <Spinner animation="grow" variant="success" />
    </div>
  );
}

export default Loader;
