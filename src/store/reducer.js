const initialState = {
  bookCount: 0,
  isAuth: false
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
      bookCount: 0
    }
  } else if (action.type === 'SIGN_IN') {
    return {
      ...state,
      isAuth: true
    }
  }
  return state
}

export default reducer
