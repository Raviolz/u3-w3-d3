const initialState = {
  favorites: {
    count: 0,
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, favorites: { ...state.favorites, count: state.favorites.count + action.payload } }

    default:
      return state
  }
}

export default mainReducer
