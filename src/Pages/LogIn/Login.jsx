import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Login.css";
import { useContextCustom } from "../../Context/Context";
import { handleChange, handleSubmit } from "../../Services/handleEvent";
import Loading from "../Loading/Loading";
import { get } from "../../Services/Fetching";
//

//
export default function Login() {
  const [state, dispatch] = useContextCustom();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  //
  useEffect(() => {}, [state, token, dispatch]);

  useLayoutEffect(() => {
    const storeToken = localStorage.getItem("token");

    if (storeToken) {
      get(storeToken, dispatch); //check authorization token
      setToken(storeToken);
    }
  }, [dispatch]);// prevent to reload when the user was login already

  //
  return (
    <>
      {state.loading ? (
        Loading()
      ) : (
        <div className="login">
          <h1>Login</h1>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(username, password, dispatch).then((result) =>
                setToken(result)
              );
            }}
          >
            <input
              type="text"
              placeholder="Username"
              required="required"
              onChange={(e) => {
                const val = handleChange(e);
                setUsername(val);
              }}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              required="required"
              onChange={(e) => {
                setPassword(handleChange(e));
                //"same way as username method "the value that return from Handle =>become=> argument for Set
              }}
              value={password}
            />
            <button
              type="submit"
              className="btn btn-primary btn-block btn-large"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
