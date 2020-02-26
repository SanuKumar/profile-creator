import users from "../apis/users";

export const fetchUser = () => async dispatch => {
  const response = await users.get(`/users.json`);
  // console.log("api response", response);

  dispatch({
    type: "FETCH_USER",
    payload: response.data.users
  });
};

export const fetchPosts = () => async dispatch => {
  const response = await users.get(`/posts.json`);
  console.log("api postsresponse", response.data.posts);

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data.posts
  });
};

export const fetchComments = () => async dispatch => {
  const response = await users.get(`/comments.json`);
  console.log("api commentsresponse", response);

  dispatch({
    type: "FETCH_COMMENTS",
    payload: response.data.comments
  });
};

export const fetchActivity = () => async dispatch => {
  const response = await users.get(`/activity.json`);
  console.log("api activityresponse", response);

  dispatch({
    type: "FETCH_ACTIVITY",
    payload: response.data.activity
  });
};
