import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "../reducers/indexR"

const store = configureStore({
  reducer: mainReducer,
})

export default store
