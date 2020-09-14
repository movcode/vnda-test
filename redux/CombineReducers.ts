import { combineReducers } from 'redux'
import { UserReducer } from '../components/User/redux'

export default combineReducers({
  user: UserReducer
})
