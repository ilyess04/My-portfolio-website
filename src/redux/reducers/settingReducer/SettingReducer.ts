import { createSlice } from "@reduxjs/toolkit";
import { ISettingReducer } from "../../../common/interfaces";
import { Elang } from "../../../common/enums";

const initiaState: ISettingReducer = {
  lang: Elang.en,
};

const SettingReducer = createSlice({
  name: "setting",
  initialState: initiaState,
  reducers: {
    setLang: (state: ISettingReducer, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = SettingReducer.actions;

export default SettingReducer.reducer;
