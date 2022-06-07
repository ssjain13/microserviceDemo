import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CustomerService from "../service/customer/customer.service";

export const saveCustomer = createAsyncThunk("save", async (customer) => {
  const res = await CustomerService.save(customer);
  return res.data;
});

export const updateCustomer = createAsyncThunk(
  "customers/update",
  async (data) => {
    const res = await CustomerService.update(data);
    return res.data;
  }
);

export const deleteCustomer = createAsyncThunk(
  "customers/delete",
  async (id) => {
    const res = await CustomerService.delete(id);
    return res.data;
  }
);

export const getAllCustomers = createAsyncThunk("getAll", async () => {
  const res = await CustomerService.getAll();
  return res.data;
});

export const customerSlice = createSlice({
  name: "customers",
  initialState: {
    customers: [],
    loading: false,
    fields: [],
    filtered: [],
  },
  reducers: {
    searchCustomer(state, action) {
      state.filtered = [...action.payload];
    },
  },

  extraReducers: {
    [saveCustomer.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updateCustomer.fulfilled]: (state, action) => {
      const id = action.payload.id;
      const index = state.customers.findIndex((s) => s.id === id);
      state[index] = { ...state[index], ...action.payload };
    },
    [deleteCustomer.fulfilled]: (state, action) => {
      const index = state.findIndex((s) => s.id === action.payload.id);
      state.splice(index, 1);
    },
    [getAllCustomers.fulfilled]: (state, action) => {
      state.customers = [...action.payload];
      state.fields = Object.keys(action.payload[0]);
      state.loading = false;
      state.filtered = state.customers;
    },
    [getAllCustomers.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
export const { searchCustomer } = customerSlice.actions;

export default customerSlice.reducer;
