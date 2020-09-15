import { action } from 'typesafe-actions'
import { UserType, UserActionMap } from '../Types'

const UserAction = {
  store: (user: UserType) => action(UserActionMap.STORE, user),
  update: (user: UserType) => action(UserActionMap.UPDATE, user),

  response: (status: boolean, data: any) => action(UserActionMap.RESPONSE, {
    status, data
  })
}

export default UserAction
