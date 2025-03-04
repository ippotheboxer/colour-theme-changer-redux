import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { THEME_DATA } from "../themeData";

export interface Theme {
  themeName: string;
  bgColor: string;
  headerColor: string;
  primaryText: string;
}

interface ThemeState {
  theme: Theme;
}

// Default theme
const initialState: ThemeState = {
  theme: THEME_DATA[0], // Default to Light Theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;

      document.documentElement.style.setProperty("--primary-bg", action.payload.bgColor);
      document.documentElement.style.setProperty("--primary-text", action.payload.primaryText);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
