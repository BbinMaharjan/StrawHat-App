import axios from "axios";

export const ADD_USERS = "ADD_USERS";
export const GET_USERS = "GET_USERS";

const BASE_URL = "https://react-native-7346a-default-rtdb.firebaseio.com";

export const addUsers = (user) => ({
  type: ADD_USERS,
  payload: user,
});

export const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const addUsersToFirebase = (user) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/users.json`, user);
  console.log(response.data);
};

export const getAllUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(`${BASE_URL}/users.json`);
    console.log("BEFORE", response.data);

    const allUserIds = Object.keys(response.data);
    const users = allUserIds.map((id) => {
      const user = response.data[id];
      user["id"] = id;
      return user;
    });
    dispatch(getUsers(users));
  };
};
