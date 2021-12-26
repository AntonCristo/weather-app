import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { navigationReducer, locationSearchReducer } from "src/slices";

export const store = configureStore({
  reducer: { navigationReducer, locationSearchReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;