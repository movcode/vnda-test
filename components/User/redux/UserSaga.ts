
import { AxiosError, AxiosResponse } from 'axios'
import { takeLatest, put, call } from 'redux-saga/effects'
import { UserActionMap, UserActionType, UserType } from '../Types'
import UserRepo from '../UserRepository'

const storeInApi = async (user:UserType) => await UserRepo.post(user)

function * store (ac:UserActionType) {
  const { payload } = ac

  try {
    const resp: AxiosResponse = yield call(storeInApi, payload)
    console.log(resp.data)
  } catch (err) {
    const error: AxiosError = err
    console.log(error.response?.data)
  }
}

export default function * observer () {
  yield takeLatest(UserActionMap.STORE, store)
}
