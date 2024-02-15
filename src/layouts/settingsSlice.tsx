import { createSlice } from '@reduxjs/toolkit';

type state = {
   theme: string;
   langue: string;
   timer: number;
};

const initialState: state = {
   theme: 'dark',
   langue: 'en',
   timer: 0,
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
      setTimer: (state, action) => {
         return { ...state, timer: action.payload };
      },
   },
});
