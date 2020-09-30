export const intialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state, // return current state but..
        user: action.user, //  change the user with whatever passed in as user payload
      };

    default:
      return state;
  }
};

export default reducer;
