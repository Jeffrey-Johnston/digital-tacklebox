import { createSlice } from "@reduxjs/toolkit";

const newItemFormSlice = createSlice({
  name: "newItemForm",
  initialState: { formIsVisible: false },
  reducers: {},
});
export const newItemFormActions = newItemFormSlice.actions;

export default newItemFormSlice;
