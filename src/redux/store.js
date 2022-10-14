import { configureStore } from "@reduxjs/toolkit";
import searchvalue from "./SearchBarvalue";
const store = configureStore({ reducer: { searchvalue: searchvalue.reducer } });
export default store;
