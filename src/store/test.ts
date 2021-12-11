import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'testing success',
};

const fontsSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
});

const { reducer: test } = fontsSlice;

export { test };
