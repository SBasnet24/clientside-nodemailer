import React from "react";
import Form from "./components/Form";

const App = () => (
  <div className="container" style={{ marginTop: "80px" }}>
    <div className="row">
      <div className="col-md-8 m-auto">
        <h1 className="display-4 ">Contact Form</h1>
        <Form />
      </div>
    </div>
  </div>
);

export default App;
