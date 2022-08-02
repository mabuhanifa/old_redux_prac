import { TODO_FAILED, TODO_REQUEST, TODO_SUCCESS } from "../constants/todoConstans";

const todoActions = () => async (dispatch) => {
  dispatch({ type: TODO_REQUEST });
  try {
    const res = await axios
    dispatch({ type: TODO_SUCCESS });
  } catch (error) {
    dispatch({ type: TODO_FAILED });
  }
};
