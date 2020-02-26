import initialState from "../store/initialState";

export default (state = initialState.activity.activity, action) => {
  switch (action.type) {
    case "FETCH_ACTIVITY":
      return [...state, action.payload];
    default:
      return state;
  }
};
