/* eslint-disable camelcase */

/**
 * User Type
 */

export interface UserType {
    name: string,
    external_code: string,
    email: string,
    role_name: string,
    role?:string,
    tags: []
  }

/**
 * User Action Type
 */
export interface UserActionType {
    store: (user: UserType) => { type: string, payload: UserType }
}
