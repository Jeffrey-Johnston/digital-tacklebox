import { createSlice } from "@reduxjs/toolkit";

const tackleBoxSlice = createSlice({
  name: "tackleBox",
  initialState: { items: [], changed: false, totalQuantity: 0 },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addNewTackleBox(state, action) {
      const newItem = action.payload;
      state.changed = true;

      state.items.push({
        id: newItem.id,
        name: newItem.name,
      });
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.changed = true;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const tackleBoxActions = tackleBoxSlice.actions;

export default tackleBoxSlice;
