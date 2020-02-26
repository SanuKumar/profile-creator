import initialState from "../store/initialState";

export default (state = initialState.comments.comments, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return [...state, action.payload];
    default:
      return state;
  }
};
