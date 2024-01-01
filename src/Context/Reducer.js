export const actionType = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT'
}

export const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null
}


export function Reducer(state, action) {
  switch (action.type) {
    case actionType.REQUEST:
      return {
        ...state,
        user: null,
        token: null,
        loading: true,
        error: null
      }

    case actionType.SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        error: null
      }

    case actionType.ERROR:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: action.payload.error
      }

    case actionType.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: null
      }

    default:
      throw Error(` ${action.type} isn't in our actionTypes`)
  }
}