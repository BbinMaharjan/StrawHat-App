import { ADD_USERS } from "../actions/signup";
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
    default:
      return state;
  }
};

export default usersReducer;
