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
  STORE = '@redux/USER_STORE',
  STORE_SUCCES = '@redux/USER_STORE_SUCCESS'
}

/**
 * User Action Type
 */
export interface UserActionType {
  type: string,
  payload: UserType
}

/**
 * User Type Success
 */
export interface UserResponseSuccess{
  data:UserType,
  message: string
}
