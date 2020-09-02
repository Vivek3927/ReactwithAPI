/** @format */

import React from "react";
import Router from "./Movies/Routes/Router";
// import FetchData from "./component/FetchData";

export default function App() {
  return (
    <div style={{ textAlign: "center", width: "auto" }}>
      <h1>Movies Details</h1>
      <hr />
      <Router />
      {/* <FetchData /> */}
    </div>
  );
}
