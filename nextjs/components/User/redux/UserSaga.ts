
import { AxiosResponse } from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { UserActionMap, UserActionType, UserType } from '../Types'
import { Alert } from '../../ShareComponents'
import UserAction from './UserAction'
import UserRepo from '../UserRepository'

const storeInApi = async (user: UserType) => await UserRepo.post(user)

const dispatch = (status:boolean, data:any = null) =>
  put(UserAction.response(status, data))

function * store (ac: UserActionType) {
  const { payload } = ac

  try {
    const resp: AxiosResponse = yield call(storeInApi, payload)
    yield dispatch(true, resp.data)

    yield Alert.Show(true, 'Usuário adicionado com sucesso!')
  } catch (err) {
    yield dispatch(false, null)
    yield Alert.Show(false, 'Erro ao adicionar o usuário!')
  }
}

export default function * observer () {
  yield takeLatest(UserActionMap.STORE, store)
}
