import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCustomer } from "../../util/customer.slice";

export const SearchCustomer = () => {
  const [searchStr, setSearchStr] = useState("");
  const { customers } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchStr(e.target.value);
    const filteredCustomer = customers.filter(
      (val) =>
        //(val) => val.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        isPresent(val.name, e.target.value) ||
        isPresent(val.email, e.target.value) ||
        isPresent(val.address, e.target.value)
    );

    dispatch(searchCustomer(filteredCustomer));
  };

  const isPresent = (field, searchTerm) => {
    if (field) {
      return field.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }
  };
  return (
    <div>
      <TextField
        variant="standard"
        placeholder="Search customer"
        onChange={handleSearch}
        value={searchStr}
        style={{ width: "15rem", marginRight: "1em" }}
      />
    </div>
  );
};
