const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CARD') {
    return { ...state, total: state.total + 1 }
  }

  if (action.type === 'CLEAR_CARD') {
    return { ...state, total: 0 }
  }

  if (action.type === 'INCREASE') {
    return { ...state, total: state.total + 1 }
  }

  if (action.type === 'DECREASE') {
    return state.total < 0
      ? state.total === 0
      : { ...state, total: state.total - 1 }
  }

  return state
}

export default reducer
