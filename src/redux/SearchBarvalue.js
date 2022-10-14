import { createSlice } from "@reduxjs/toolkit";

const searchvalue = createSlice({
  name: "search",
  initialState: {
    gamername: null,
    category: null,
    platform: "",
    sorted: false,
  },
  reducers: {
    getsearchvalue(state, action) {
      const newitem = action.payload;
      state.gamername = newitem.gname;
      state.category = newitem.cname;
    },
  },
});

export const searchvalueactions = searchvalue.actions;
export default searchvalue;
