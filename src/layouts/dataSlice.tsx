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

export type projects = {
   [key: string]: {
      id: string;
      date: string;
      name: string;
      category: string;
      description: contentLangue;
      tag: string[];
      github: string;
      link: string;
   };
};

type data = {
   init: boolean;
   home: {
      title: contentLangue;
   };
   work: {
      title: contentLangue;
      tag: { [key: string]: string };
      projects: projects;
   };
   about: {
      title: contentLangue;
      content: contentLangue;
   };
   contact: {
      content: contentLangue;
      input: { [key: string]: contentLangue };
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
      home: { title: {} },
      work: { title: {}, tag: {}, projects: {} },
      about: { title: {}, content: {} },
      contact: { content: {}, input: {} },
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
