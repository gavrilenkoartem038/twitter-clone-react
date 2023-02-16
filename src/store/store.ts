import { configureStore } from "@reduxjs/toolkit"
import { twitterApi } from "../redux/twitterApi"

export const store = configureStore({
  reducer: {
      // Добавляем редьюсер как слайс
      [twitterApi.reducerPath]: twitterApi.reducer,
  },
  // Добавляем апи мидлвар, что даст нам кэширование, инвалидацию, полинг,
  // и другие полезные штуки
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(twitterApi.middleware),
})
