import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./";

export const store = configureStore({
    reducer: {
        home: homeSlice
    },
});