import { post } from "./Fetching";
import { actionType } from "../Context/Reducer";


export function handleChange(event) {
  const value = event.target.value
  return value
}


export async function handleSubmit(username, password, dispatch) {
  dispatch({ type: actionType.REQUEST });
  return await post(username, password, dispatch);//return token
}

export function handleLogout(dispatch) {

  localStorage.clear()
  dispatch({ type: actionType.LOGOUT });

}