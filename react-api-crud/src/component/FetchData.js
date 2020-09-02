/** @format */

import React, { Component } from "react";
import axios from "axios";
class FetchData extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }
  componentDidMount() {
    axios("https://moviesbar.herokuapp.com/movies")
      .then((res) => {
        // console.log(res.data);
        this.setState({ Data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const getData = this.state.Data.map((result) => {
      return result;
    });
    return (
      <div>
        <h5>Hello </h5>
        {getData}
      </div>
    );
  }
}
export default FetchData;
