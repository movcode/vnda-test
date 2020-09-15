/* eslint-disable no-unused-vars */
export const UserFormState: UserType = ({
  name: '',
  external_code: '',
  email: '',
  role_name: '',
  tags: []
})

/**
 * User Type
 */
export interface UserType {
  id?:string,
  name: string,
  external_code: string,
  email: string,
  role_name: string,
  role?: string,
  tags: []
}

export enum UserActionMap {
  LIST = '@redux/USER_LIST',
  STORE = '@redux/USER_STORE',
  UPDATE = '@redux/USER_UPDATE',
  RESPONSE = '@redux/USER_RESPONSE',
}

/**
 * User Action Type
 */
export interface UserActionType {
  type: string,
  payload: UserType
}

/**
 * Response User
 */
export interface UserState {
  response:{
    status:boolean
    data?: any,
  }
}

/**
 * User Type Success
 */
export interface UserReducer {
  user:UserState
}
