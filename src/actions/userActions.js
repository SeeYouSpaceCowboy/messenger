import { userAdapter } from '../adapters/userAdapter'

export const signup = user => {
  const response = userAdapter.signup(user)

  return {
    type: 'SIGN_UP',
    payload: response
  }
}

export const login = user => {
  const response = userAdapter.login(user)

  return {
    type: 'LOGIN',
    payload: response
  }
}

export const fetchCurrentUser = () => {
  const response = userAdapter.fetchCurrentUser()

  return {
    type: 'FETCH_CURRENT_USER',
    payload: response
  }
}
