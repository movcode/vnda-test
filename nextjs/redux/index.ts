import { createStore, applyMiddleware } from 'redux'
import createSagaMid from 'redux-saga'
import reducers from './CombineReducers'
import sagas from './CombineSagas'

const sagaMid = createSagaMid()

const mids = [sagaMid]

const store = createStore(
  reducers,
  applyMiddleware(...mids)
)

sagaMid.run(sagas)
export default store
