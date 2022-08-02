import {
    TODO_FAILED,
    TODO_REQUEST,
    TODO_SUCCESS
} from "../constants/todoConstans";

const initialState = {
  loading: false,
  todo: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TODO_REQUEST:
      return {
        loading: true,
      };
    case TODO_SUCCESS:
      return {
        loading: false,
        todo: payload,
        error: null,
      };
    case TODO_FAILED:
      return {
        loading: false,
        todo: [],
        error: payload.error,
      };

    default:
      return state;
  }
};
