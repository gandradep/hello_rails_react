import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://127.0.0.1:5000/api/greetings/surprise_greeting';

async function fetchApi () {
  return fetch(apiUrl)
          .then(response => response.json())
          .then(messageData => messageData.text);
}

export const randomGreeting = createAsyncThunk(
  'Messages/random',
  fetchApi
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(randomGreeting.fulfilled, (_, action) => action.payload )
  }
});

export default greetingSlice.reducer;