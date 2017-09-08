export default function userReducer(state = { currentUser: {} }, action) {
  switch(action.type) {
    case 'SIGNUP':
    case 'LOGIN':
    case 'FETCH_CURRENT_USER':
      return { ...state, currentUser: action.payload }
    default: return state
  }
}
