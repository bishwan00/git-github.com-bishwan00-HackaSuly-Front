import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import userSlice from "./api/globalSlices/user.slics";
import { postApi } from "./api/post";
import { postWithTokensApi } from "./api/postWithToken";
import { taskWithTokensApi } from "./api/taskWithToken";
import { taskApi } from "./api/task";
import { userApi } from "./api/user";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userSlice.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [postWithTokensApi.reducerPath]: postWithTokensApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [taskWithTokensApi.reducerPath]: taskWithTokensApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      postApi.middleware,
      postWithTokensApi.middleware,
      taskApi.middleware,
      taskWithTokensApi.middleware,
      userApi.middleware
    ),
});
