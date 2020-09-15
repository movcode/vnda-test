import { action } from 'typesafe-actions'
import { UserType, UserActionMap, UserResponseSuccess } from '../Types'

const UserAction = {
  store: (user: UserType) => action(UserActionMap.STORE, user),
  success: (response:UserResponseSuccess) => action(UserActionMap.STORE_SUCCES, response)
}

export default UserAction
