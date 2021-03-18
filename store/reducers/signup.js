import { ADD_USERS, GET_USERS } from "../actions/signup";
const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      const updateUsers = [action.payload, ...state.users];
      return {
        ...state,
        users: updateUsers,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
