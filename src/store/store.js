import {configureStore} from "@reduxjs/toolkit";
import {dataSlice} from "./slices/dataSlice.js";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer
    }
})