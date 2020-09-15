import { action } from 'typesafe-actions'
import { UserType, UserActionMap } from '../Types'

const UserAction = {
  store: (user: UserType) => action(UserActionMap.STORE, user)
}

export default UserAction
