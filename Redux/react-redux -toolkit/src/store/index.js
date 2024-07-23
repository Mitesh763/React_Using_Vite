import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CouterSlice";
import privacySlice from "./PrivacySlice";

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer },
});

export default counterStore;
