import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
// store'u yapılandırın
const store = configureStore({
  reducer: {
    posts: postSlice,
  },
  // middleware'lar varsayılan olarak zaten eklendiği için burayı atlayabilirsiniz.
});

// RootState ve AppDispatch tiplerini tanımlayın ve export edin
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
