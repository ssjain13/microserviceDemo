import React from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { deleteCustomer, saveOrUpdateCustomer, updateCustomer } from "../../service/customer/customer.service";
import { Form, Button } from "react-bootstrap";
import { Input } from "../common/Input";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./customer.css";
import { CustomToast } from "../common/Toast";
export const CustomerUpdate = () => {
  const location = useLocation();
  const { customerTobeUpdated } = location.state;
  let navigate = useNavigate();
  //Fields that can be updated : email, address.
  const [status, setStatus] = useState(false);
  const [customer, setCustomer] = useState(customerTobeUpdated);
  const handleDeleteCustomer = () => {
    deleteCustomer(customerTobeUpdated.id)
      .then(() => {
        setStatus(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    console.log(customer);
    setCustomer({ ...customer, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveOrUpdateCustomer(customer,'update')
      .then(() => {
        setStatus(true);
      })
      .catch((err) => {
        console.error(err);
      });
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
