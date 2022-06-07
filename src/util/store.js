import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customer.slice";

const reducer = {
  customers: customerReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
