import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActions";

const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
  path: []
};
// flights, bütün uçuşların verisi
// path, 1 uçuşun izlediği yolun verisi

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    // MapView bileşeninde kullanılacak rotayı belirler
    setPath: (state, action)=>{
      state.path = action.payload
    },
    // rotayı temizler
    clearPath: (state)=>{
      state.path = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFlights.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.flights = action.payload;
    });
  },
});

export const {setPath, clearPath} = flightSlice.actions

export default flightSlice.reducer;
