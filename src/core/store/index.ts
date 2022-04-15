import { configureStore } from "@reduxjs/toolkit";
import { alertsSlice, reducer as alertsReducer } from "./slices/alerts";

const store = configureStore({
  reducer: { [alertsSlice.name]: alertsReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
