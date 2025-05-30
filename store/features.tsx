import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBrand: null,
    selectedDiscount: null
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
        }
    },
});

export const {
    updateSelectedBrand,
    updateSelectedDiscount
} = featuresSlice.actions;

export const featuresReducer = featuresSlice.reducer;
