import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBrand: null,
    selectedDiscount: null,
    globalFilterCities: []
};

export const featuresSlice = createSlice({
    name: "features",
    initialState,
    reducers: {
        updateSelectedBrand: (state, action) => {
            state.selectedBrand = action.payload;
        },
        updateSelectedDiscount: (state, action) => {
            state.selectedDiscount = action.payload;
        },
        updateGlobalFilterCities: (state, action) => {
            state.globalFilterCities = action.payload;
        }
    },
});

export const {
    updateSelectedBrand,
    updateSelectedDiscount,
    updateGlobalFilterCities
} = featuresSlice.actions;

export const featuresReducer = featuresSlice.reducer;
