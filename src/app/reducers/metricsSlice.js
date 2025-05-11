import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMetrics = createAsyncThunk("fetch-metrics", async () => {
  const url = `https://ironpondstack-logbucketcc3b17e8-1t5bduk77ymwx.s3.amazonaws.com/app_data/metrics.json`;
  return await fetch(url, { method: "GET" }).then((response) =>
    response.json()
  );
});

const initialMetricState = {
  data: null,
  loading: false,
  error: false,
  message: null,
};

export const metricsSlice = createSlice({
  name: "metrics",
  initialState: initialMetricState,
  reducers: {
    resetMetrics: () => initialMetricState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { resetMetrics } = metricsSlice.actions;
export default metricsSlice.reducer;
