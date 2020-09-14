/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import { Action } from 'redux'

/**
 * User Type
 */

export interface UserType {
  name: string,
  external_code: string,
  email: string,
  role_name: string,
  role?: string,
  tags: []
}

export enum UserActionMap {
  LIST = '@redux/USER_LIST',
  STORE = '@redux/USER_STORE'
}

/**
 * User Action Type
 */
export interface UserActionType {
  type: string,
  payload: UserType
}
