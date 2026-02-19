const initialState = {
  favorites: {
    count: 0,
    list: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          count: state.favorites.count + 1,
          list: [...state.favorites.list, action.payload],
        },
      }

    default:
      return state
  }
}

export default mainReducer
