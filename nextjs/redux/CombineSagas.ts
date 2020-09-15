
import { all } from 'redux-saga/effects'
import { UserSaga } from '../components/User/redux'
export default function * combineSagas () {
  yield all([
    UserSaga()
  ])
}
