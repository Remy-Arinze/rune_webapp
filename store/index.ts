// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from '../services/api/mainApi';
import uiReducer from "@/store/ui_slice";


export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    ui: uiReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;