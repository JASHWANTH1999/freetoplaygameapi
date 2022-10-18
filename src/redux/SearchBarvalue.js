import { createSlice } from "@reduxjs/toolkit";

const searchvalue = createSlice({
  name: "search",
  initialState: {
    gamername: null,
    category: null,
    platform: null,
    sorted: null,
    games: null,
    // callapi: false,
  },
  reducers: {
    // startgetapi(state) {
    //   state.callapi = !state.callapi;
    // },
    getsearchvalue(state, action) {
      const newitem = action.payload;
      state.gamername = newitem.gname;
      state.category = newitem.cname;
      state.platform = newitem.pname;
      state.sorted = newitem.sname;
    },
    getgamesapi(state, action) {
      const newitems = action.payload;
      state.games = newitems.gamesmultiple;
    },
  },
});

export const searchvalueactions = searchvalue.actions;
export default searchvalue;
