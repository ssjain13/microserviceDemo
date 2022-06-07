import React from "react";
import { useState } from "react";
import {  useLocation } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import { Input } from "../common/Input";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./customer.css";
import { CustomToast } from "../common/Toast";
import { useDispatch } from "react-redux";
import { deleteCustomer ,updateCustomer} from "../../util/customer.slice";
export const CustomerUpdate = () => {
  const location = useLocation();
  const { toBeUpdated } = location.state;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [customer, setCustomer] = useState(toBeUpdated);
  const handleDeleteCustomer = () => {
    dispatch(deleteCustomer(toBeUpdated.id));
    setStatus(true);
  };
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setCustomer({ ...customer, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCustomer( customer));
    setStatus(true);
  };
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
          message="Customer updated successfully!"
        />
      )}
      <BsArrowLeft onClick={() => navigate(-1)} className="navigate-back" />
      <Form className="form-horizontal">
        <Input
          type="text"
          name="name"
          value={customer.name}
          controlId="formName"
          title="Name"
          disabled
        />
        <Input
          type="email"
          name="email"
          value={customer.email}
          controlId="formName"
          title="Email"
          handleChange={handleChange}
          disabled={status}
        />
        <Input
          type="text"
          name="address"
          value={customer.address}
          controlId="formName"
          title="Address"
          handleChange={handleChange}
          disabled={status}
        />

        <div className="btn-container">
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="btn-submit"
          >
            Update
          </Button>
          <Button
            variant="danger"
            onClick={handleDeleteCustomer}
            className="btn-delete"
          >
            Delete
          </Button>
        </div>
      </Form>
    </div>
  );
};
