import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Login.css";
import { useContextCustom } from "../../Context/Context";
import { handleChange, handleSubmit } from "../../Services/handleEvent";
import Loading from "../Loading/Loading";
import { get } from "../../Services/Fetching";
import Tooltip from "@mui/material/Tooltip";
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
  }, [dispatch]); // prevent to reload when the user was login already

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
            <div className="btn_tip">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-large"
              >
                Submit
              </button>

              <Tooltip
                title="Username & Password: admin"
                arrow
                placement="bottom-start"
              >
                <span className="tooltiip">
                  <img
                    src="https://s3.lightboxcdn.com/vendors/906a5d64-2cda-407f-a2d5-6cf94c06ddbe/uploads/274a7932-a0fd-4a89-9f58-a83cc44112ca/info.svg"
                    width="30"
                    height="30"
                    alt="info"
                  />
                </span>
              </Tooltip>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
