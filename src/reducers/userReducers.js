import initialState from "../store/initialState";

export default (state = initialState.users.users, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
