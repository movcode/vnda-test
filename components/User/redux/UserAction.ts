import { ListAction } from '../../../custom'
import IUser from '../IUser'

const UserAction = {
  store: (user: IUser) => ({
    type: ListAction.users.store,
    payload: user
  })
}

export default UserAction
