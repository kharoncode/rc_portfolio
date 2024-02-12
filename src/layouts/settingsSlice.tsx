import { createSlice } from '@reduxjs/toolkit';

type state = {
   theme: string;
   langue: string;
};

const initialState: state = {
   theme: 'dark',
   langue: 'en',
};

export const settingsSlice = createSlice({
   name: 'settings',
   initialState,
   reducers: {
      toggleTheme: (state, action) => {
         return { ...state, theme: action.payload };
      },
      toggleLangue: (state, action) => {
         return { ...state, langue: action.payload };
      },
   },
});
