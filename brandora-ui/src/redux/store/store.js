import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../slices/menu";

export const store = configureStore({
    reducer: {
        menu: menuSlice,
    }
})
