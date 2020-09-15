
import { AxiosError, AxiosResponse } from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { UserActionMap, UserActionType, UserType, UserResponseSuccess } from '../Types'
import UserAction from './UserAction'
import UserRepo from '../UserRepository'

const storeInApi = async (user: UserType) => await UserRepo.post(user)

function * store (ac: UserActionType) {
  const { payload } = ac

  try {
    const resp: AxiosResponse = yield call(storeInApi, payload)

    const response: UserResponseSuccess = {
      data: resp.data,
      message: 'Usuário adicionado com sucesso'
    }
    yield put(UserAction.success(response))
  } catch (err) {
    const error: AxiosError = err
    console.log(error.response?.data)
  }
}

export default function * observer () {
  yield takeLatest(UserActionMap.STORE, store)
}
