import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
   return fetch('./data/data.json')
      .then((resulut) => resulut.json())
      .then((data) => {
         return data;
      });
});

export type contentLangue = {
   [key: string]: string[];
};

export type contentQuote = {
   [key: string]: { author: string; quote: string }[];
};

export type title = { [key: string]: string };

export type project = {
   id: string;
   date: string;
   name: string;
   category: string;
   description: title;
   tag: string[];
   github: string;
   link: string;
};

type data = {
   init: boolean;
   smileyList: string[];
   error: {
      title: contentLangue;
   };
   home: {
      title: contentLangue;
   };
   work: {
      title: title;
      tag: { [key: string]: string };
      projects: { [key: string]: project };
   };
   about: {
      title: title;
      content: contentLangue;
   };
   contact: {
      content: contentLangue;
      input: { [key: string]: contentLangue };
      modal: title;
      waiting_room: { title: contentLangue; content: contentQuote };
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
      smileyList: [],
      error: { title: {} },
      home: { title: {} },
      work: { title: {}, tag: {}, projects: {} },
      about: { title: {}, content: {} },
      contact: {
         content: {},
         input: {},
         modal: {},
         waiting_room: { title: {}, content: {} },
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
