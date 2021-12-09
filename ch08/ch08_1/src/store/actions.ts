// 초기 버전
/*
import type {Action} from 'redux'

export type LoginActions = Action
*/
// 로긴 액션 구현 버전(최종 버전)
import type {Action} from 'redux'
import {User} from './AppState'

type LogoutAction = Action<'logout'>
type LoginAction = Action<'login'> & {
  loggedUser: User
}

export type LoginActions = LogoutAction | LoginAction

export const loginAction = (loggedUser: User): LoginAction => ({
  type: 'login',
  loggedUser
})
export const logoutAction = (): LogoutAction => ({
  type: 'logout'
})
