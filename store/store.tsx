import { configureStore } from "@reduxjs/toolkit";

import { featuresReducer } from "./features";

export const store = configureStore({
    reducer: featuresReducer,
});
