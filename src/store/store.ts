import { configureStore } from "@reduxjs/toolkit"
import { twitterApi } from "../redux/twitterApi"
import commonSlice from "./reducers/commonSlice"

export const store = configureStore({
  reducer: {
    common: commonSlice,
    [twitterApi.reducerPath]: twitterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(twitterApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch