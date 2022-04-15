import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../..";
import { Alert } from "../../../types/Alert";
import { addAlert, hideAlert } from "./slice";

const receiveAlert = createAsyncThunk<
  // Return type of the payload creator
  Alert,
  // First argument to the payload creator
  Alert,
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch;
    state: RootState;
  }
>("alerts/receiveAlert", async (alert, { dispatch }) => {
  dispatch(addAlert(alert));
  setTimeout(() => dispatch(hideAlert({ id: alert.id })), 2500);

  return alert;
});

export { receiveAlert };
