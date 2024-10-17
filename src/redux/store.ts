// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";


// Store'u oluştur
const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});

// RootState ve AppDispatch türlerini tanımla
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
