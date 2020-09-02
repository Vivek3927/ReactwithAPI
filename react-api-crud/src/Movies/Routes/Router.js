/** @format */
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import GetData from "../Details/GetData";
import Detail from "../Details/Detail";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/"></Link>
          {/* <Link to="/details"></Link> */}
        </div>
        <Switch>
          <Route exact path="/" component={GetData} />
          <Route path="/details/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
