import { createSlice } from "@reduxjs/toolkit";

const passbooksSlice = createSlice({
  name: "passbooks",
  initialState: {
    ids: [],
  },
  reducers: {
    addPassbook: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removePassbook: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addPassbook = passbooksSlice.actions.addPassbook;
export const removePassbook = passbooksSlice.actions.removePassbook;
export default passbooksSlice.reducer;
