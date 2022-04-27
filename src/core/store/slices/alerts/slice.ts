import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "../../../../types/Alert";
import { receiveAlert } from "./useCases";

const initialState = [] as Alert[];

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert(state, action) {
      state.push(action.payload);
    },
    hideAlert(state, action) {
      state = state.map((alert) => {
        if (alert.id === action.payload.id) {
          alert.show = false;
        }
        return alert;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(receiveAlert.fulfilled, () => {});
  },
});

const { addAlert, hideAlert } = alertsSlice.actions;

export { alertsSlice, addAlert, hideAlert };
