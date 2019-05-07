const initialState = {
  bookCount: 0,
  isAuth: false,
  userId: null
}

const reducer = (state = initialState, action) => {
  if(action.type === 'INC_BOOK_COUNT') {
    return {
      ...state,
      bookCount: state.bookCount + 1
    }
  } else if (action.type === 'SIGN_OUT') {
    return {
      ...state,
      isAuth: false,
      bookCount: 0,
      userId: null
    }
  } else if (action.type === 'SIGN_IN') {
    return {
      ...state,
      isAuth: action.token != null ? true : false,
      userId: action.userId
    }
  }
  return state
}

export default reducer
