import { configureStore } from '@reduxjs/toolkit'
import testReducer from "./slices/testslices"
import teacherReducer from "./slices/teacherSlice"
export const store = configureStore({
  reducer: {
    test : testReducer ,
    teacher : teacherReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch