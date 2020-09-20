import React, { useState } from "react";
import Input from "./form/Input";
import TextArea from "./form/TextArea";
import axios from "axios";
import config from "../config.json";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { email, name, message, phone } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${config.apiUrl}`, {
      name,
      email,
      phone,
      message,
    });
    console.log(response);
    window.location = "/";
  };
  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
      />
      <Input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email Address"
      />
      <Input
        type="text"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder="Contact Number"
      />
      <TextArea
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        placeholder="Message Here"
        rows="7"
      />
      <button className="btn btn-dark btn-block mt-4">Submit</button>
    </form>
  );
};

export default Form;
