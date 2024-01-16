import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "./EmployeeSlice";

export const store = configureStore({
  reducer:{
    employee: EmployeeSlice,
  }
})

