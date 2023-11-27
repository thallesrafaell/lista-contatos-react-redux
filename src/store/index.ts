import { configureStore } from '@reduxjs/toolkit'
import contatosReducers from './reducers/contatos'
const store = configureStore({
  reducer: {
    cadastra: contatosReducers
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
