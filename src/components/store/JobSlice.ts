import { RootState } from "./index";
import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../helper";
// const dataSent = initialData();
export const JobSlice = createSlice({
  name: "jobSlice",
  initialState: { data: "" },
  reducers: {
    getJobs(state, action) {
      const dataSent = action.payload;
      state.data = dataSent;
    },
  },
});

export const JobActions = JobSlice.actions;
export default JobSlice.reducer;
