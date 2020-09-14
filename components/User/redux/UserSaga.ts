import { takeLatest, put, call } from 'redux-saga/effects'
import { ListAction } from '../../../custom'

function * store (ac) {
  console.log(ac)
}

export default function * observer () {
  yield takeLatest(ListAction.users.store, store)
}
