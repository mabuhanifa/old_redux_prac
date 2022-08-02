import axios from "axios";
import {
    TODO_FAILED,
    TODO_REQUEST,
    TODO_SUCCESS
} from "../constants/todoConstans";

export const todoActions = () => async (dispatch) => {
  dispatch({ type: TODO_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    dispatch({ type: TODO_SUCCESS, payload: res.data });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: TODO_FAILED });
  }
};
