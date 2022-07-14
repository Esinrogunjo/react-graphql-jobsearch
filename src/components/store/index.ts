import { configureStore } from "@reduxjs/toolkit";
import { JobSlice } from "./JobSlice";

export const store = configureStore({
  reducer: { jobReducer: JobSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
