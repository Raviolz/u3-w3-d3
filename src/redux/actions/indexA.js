export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const INCREMENT = "INCREMENT"

export const addToFavorites = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  }
}
