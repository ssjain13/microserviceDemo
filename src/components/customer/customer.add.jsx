import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveCustomer } from "../../util/customer.slice";
import { Input } from "../common/Input";
import { CustomToast } from "../common/Toast";
import "./customer.css";

const customer = {
  name: "",
  email: "",
  address: "",
  age: "",
};
export const AddCustomer = () => {
  const [customerObj, setCustomerObj] = useState(customer);
  const [birthdateObj, setBirthdateObj] = useState(new Date());
  const [status, setStatus] = useState(false);
  const dispatch= useDispatch();

  let navigate = useNavigate();

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "dob") {
      var age = getAge(value);
      setBirthdateObj(value);
      name = "age";
      value = age;
    }
    setCustomerObj({ ...customerObj, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCustomer(customerObj));
    setStatus(true);
  };
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const handleClose = () => {
    setStatus(false);
    navigate("/");
  };
  return (
    <div>
      {status && (
        <CustomToast
          handleClose={handleClose}
          status={status}
          message="Customer saved successfully"
        />
      )}

      <BsArrowLeft onClick={() => navigate(-1)} className="navigate-back" />
      <h3 className="title">Enter Customer details</h3>
      <Form className="form-horizontal">
        <Input
          type="text"
          name="name"
          value={customerObj.name}
          controlId="formName"
          title="Name"
          handleChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={customerObj.email}
          controlId="formName"
          title="Email"
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          value={customerObj.address}
          controlId="formName"
          title="Address"
          handleChange={handleChange}
        />
        <Input
          type="date"
          name="dob"
          value={birthdateObj}
          controlId="formName"
          title="Date of Birth"
          handleChange={handleChange}
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
