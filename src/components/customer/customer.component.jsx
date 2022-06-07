import AddIcon from "@mui/icons-material/Add";
import { CircularProgress, Fab, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCustomers } from "../../util/customer.slice";
import { CardLayout } from "../common/Card.layout";
import "../customer/customer.css";
import { SearchCustomer } from "./customer.search";

export const Customer = () => {
  const { filtered, fields, loading } = useSelector((state) => state.customers);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <div className="nav">
            <SearchCustomer />

            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={() => navigate("/add")}
            >
              <AddIcon />
            </Fab>
          </div>
          {filtered.length < 1 && (
            <Typography variant="h6">No data!</Typography>
          )}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {filtered.map((customer) => (
              <CardLayout data={customer} fields={fields} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
