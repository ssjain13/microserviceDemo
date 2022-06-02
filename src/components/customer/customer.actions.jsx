import React from "react";
import { useState } from "react";

//Need to combine handle submit and handle change function of add customer and edit customer.
//Customer state is to be updated.
//Introduce redux. ?
export const CustomerActions = (props) => {
  const [customer, setCustomer] = useState({});

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setCustomer({ ...customer, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveOrUpdateCustomer(customer,props.action)
      .then(() => {
        setStatus(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <div>CustomerActions</div>;
};
