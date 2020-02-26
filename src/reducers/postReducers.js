import initialState from "../store/initialState";

export default (state = initialState.posts.posts, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, action.payload];
    default:
      return state;
  }
};
