import { actionType } from "../Context/Reducer";

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:4000'

//POST Data Method
export async function post(username, password, dispatch) {
  const postResponse = await axios.post("/login", {
    username,
    password
  });

  const success = postResponse.data.success;

  if (success) {
    const token = postResponse.data.data;
    await get(token, dispatch);
    return token;

  } else {
    const error = postResponse.data.data;
    dispatch({
      type: actionType.ERROR,
      payload: { error }
    });
    throw new Error(error); // data===error message
  }

}

//GET Data Method
export async function get(token, dispatch) {
  const getResponse = await axios.get("/users/admin", {
    headers: { authorization: token }//admin detect
  });

  const data = getResponse.data;
  if (data.success) {
    await dispatch({
      type: actionType.SUCCESS,
      payload: {
        user: data.data,
        token
      }
    });

    localStorage.setItem('token', token)
  }
}