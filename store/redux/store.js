import { configureStore } from "@reduxjs/toolkit";
import passbooksReducer from "./passbooks";

export const store = configureStore({
  reducer: {
    passbooks: passbooksReducer,
  },
});
