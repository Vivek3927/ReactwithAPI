/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Detail({ match, history }) {
  // console.log("match : ", match);
  // console.log("History: ", history);
  // console.log(location);

  let location = useLocation();
  console.log(location);

  return (
    <div className="container text-center">
      {/* <h3>{location.details.about}</h3> */}
      {/* <h3>{location.data.name}</h3> */}
      <div className="mw-100 mh-100 bg-primary">
        <img src={location.details.banner_image} alt={location.details.id} />
      </div>
      <hr />
    </div>
  );
}
