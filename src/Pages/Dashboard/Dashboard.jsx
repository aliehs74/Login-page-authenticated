import React, { useEffect } from "react";
import "./Dashboard.css";
import { useContextCustom } from "../../Context/Context";
import { handleLogout } from "../../Services/handleEvent";

export default function Dashboard() {
  const [state, dispatch] = useContextCustom();

  useEffect(() => {}, [state, dispatch]);

  return (
    <div className="Dashboard">
      <p>Dashboard</p>
      <button onClick={(e) => handleLogout(dispatch)}>Logout</button>
    </div>
  );
}
