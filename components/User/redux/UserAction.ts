
import { UserType } from '../types'

const UserAction = {
  store: (user: UserType) => ({
    type: '',
    payload: user
  })
}

export default UserAction
