import { configureStore } from '@reduxjs/toolkit'
import { theamReducer } from './slices/theamSlice'
import { todoReducer } from './slices/todoSlide'

const store = configureStore({
  reducer: {
    theam: theamReducer,
    todos: todoReducer,
  },
})

export default store
