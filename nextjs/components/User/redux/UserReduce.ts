import { UserFormState, UserActionType, UserActionMap, UserState } from '../Types'

const INIT_STATE: UserState = {
  response: { data: UserFormState, status: false }
}

const UserReduce = (state: UserState = INIT_STATE, action: UserActionType) => {
  const { type, payload } = action

  switch (type) {
    case UserActionMap.RESPONSE: return { ...state, response: payload }
    default: return state
  }
}

export default UserReduce
