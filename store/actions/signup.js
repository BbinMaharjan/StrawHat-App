export const ADD_USERS = "ADD_USERS";

export const addUsers = (user) => ({
  type: ADD_USERS,
  payload: user,
});
