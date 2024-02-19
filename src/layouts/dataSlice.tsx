import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
   return fetch('./data/data.json')
      .then((resulut) => resulut.json())
      .then((data) => {
         return data;
      });
});

export type langue_array = { [key: string]: string[] };

export type langue_string = { [key: string]: string };

export type contentQuote = {
   [key: string]: { author: string; quote: string }[];
};

export type project = {
   id: string;
   date: string;
   name: string;
   category: string;
   description: langue_string;
   tag: string[];
   github: string;
   link: string;
};

type data = {
   init: boolean;
   smileyList: { eyes: string[]; mouth: string[] };
   error: {
      title: langue_array;
   };
   home: {
      title: langue_array;
      skills: { name: string; type: string }[];
   };
   work: {
      title: langue_string;
      tag: { [key: string]: string };
      projects: { [key: string]: project };
   };
   about: {
      title: langue_string;
      content: langue_array;
   };
   contact: {
      content: langue_array;
      input: {
         name: langue_string;
         mail: langue_string;
         message: langue_string;
      };
      modal: langue_string;
      waiting_room: { title: langue_array; content: contentQuote };
   };
};

type dataState = {
   loading: boolean;
   data: data;
   error: string | undefined;
};

const initialState: dataState = {
   loading: false,
   data: {
      init: true,
      smileyList: {
         eyes: [':', 'X', ';', '=', '8'],
         mouth: [')', ']', 'D', '3', 'p', 'b', 'þ'],
      },
      error: { title: { en: [], fr: [] } },
      home: { title: { en: [], fr: [] }, skills: [] },
      work: { title: {}, tag: {}, projects: {} },
      about: { title: {}, content: { en: [], fr: [] } },
      contact: {
         content: { en: [], fr: [] },
         input: { name: {}, mail: {}, message: {} },
         modal: {},
         waiting_room: { title: { en: [], fr: [] }, content: {} },
      },
   },
   error: undefined,
};

export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
         state.loading = true;
      }),
         builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = undefined;
         }),
         builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});
