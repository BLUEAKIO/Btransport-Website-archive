import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import settingsReducer from './features/settingsSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer
})

export default rootReducer
