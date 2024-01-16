import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}
const EmployeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      return { ...state, data: action.payload }
    },
  },
})

export const { addEmployee } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;