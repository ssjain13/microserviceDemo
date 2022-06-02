import React, { useState } from "react";
import { useEffect } from "react";
import { getAllCustomers } from "../../service/customer/customer.service";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "../customer/customer.css";

export const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    setLoading(true);
    getAllCustomers().then((result) => {
      setCustomers(result);
      setLoading(false);
    });
  }, []);

  const search = (customers) => {
    return customers.filter((customer) => {
      return (
        isPresent(customer.email) ||
        isPresent(customer.name) ||
        isPresent(customer.address)
      );
    });
  };

  const isPresent = (field) =>
    field.toLowerCase().indexOf(searchStr.toLowerCase()) > -1;

  return (
    <>
      {loading ? (
        <div>...Data Loading.....</div>
      ) : (
        <div>
          <Form.Control
            placeholder="Search customer"
            name="search"
            type="text"
            onChange={(e) => setSearchStr(e.target.value)}
            value={searchStr}
          />
          <div
            className="nav"
            style={{ fontSize: "18px", color: "#98243", padding: "0.5em" }}
          >
            <Link to="/add" className="nav-button">
              <p className="link-text">Add</p>
            </Link>
          </div>
          {search(customers).map((customer) => (
            <div
              key={customer.id}
              style={{
                display: "flex",
                background: "beige",
                width: "60vw",
                padding: "1em",
                margin: "1em",
              }}
            >
              <span
                style={{ fontSize: "18px", color: "#98243", padding: "0.5em" }}
              >
                {customer.name}
              </span>
              <span
                style={{ fontSize: "18px", color: "#98243", padding: "0.5em" }}
              >
                {customer.address}
              </span>
              <span
                style={{ fontSize: "18px", color: "#98243", padding: "0.5em" }}
              >
                {customer.email}
              </span>
              <span
                style={{ fontSize: "18px", color: "#98243", padding: "0.5em" }}
              >
                {customer.age}
              </span>

              <div
                className="nav"
                style={{ fontSize: "18px", color: "#98243", padding: "0.5em" }}
              >
                <Link
                  className="nav-button"
                  to="/update"
                  state={{ customerTobeUpdated: customer }}
                >
                  <p className="link-text">Update</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
