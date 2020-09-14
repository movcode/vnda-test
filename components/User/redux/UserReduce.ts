import { stat } from 'fs'
import { boolean } from 'yup'
import formState from '../UserForm/UserFormState'

const INIT_STATE = {
  status: boolean,
  users: formState
}

const UserReduce = (state = INIT_STATE, action:any) => {
  return state
}

export default UserReduce
