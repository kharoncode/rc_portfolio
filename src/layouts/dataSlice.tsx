import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
   return fetch('./data/data.json')
      .then((resulut) => resulut.json())
      .then((data) => {
         return data;
      });
});

type dataState = {
   loading: boolean;
   data: { [key: string]: { [key: string]: 'string' } };
   error: string | undefined;
};

const initialState: dataState = {
   loading: false,
   data: {},
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
