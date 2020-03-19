const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
      };
    case 'GET_USER_FULFILLED':
      return {
        users: action.payload.data.result[0],
      };
    case 'POST_USERS_PENDING':
      return {
        ...state,
        // isLoading: true,
      };
    case 'POST_USERS_REJECTED':
      return {
        ...state,
        // isLoading: true
      };
    case 'POST_USERS_FULFILLED':
      console.log(action.payload);
      const newUsers = [...state.users, action.payload.data.result];
      return {
        ...state,
        // isLoading: false,
        users: newUsers,
      };
    default:
      return state;
  }
};

export default users;
