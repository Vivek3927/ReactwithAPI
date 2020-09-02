/** @format */

import React, { Component } from "react";
// import "./GetData.css";
// import axios from "axios";
// import Movie from "../../Movie.json";
import { Link } from "react-router-dom";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class GetData extends Component {
  state = {
    data: [],
    error: true,
    id: [],
  };

  // async componentDidMount() {
  //   const response = await fetch("https://moviesbar.herokuapp.com/movies");
  //   const data = await response.json();
  //   console.log(data);
  // }

  // componentDidMount() {
  //   axios
  //     .get("https://moviesbar.herokuapp.com/movies")
  //     .then((res) => {
  //       console.log(res.data[0].name);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  componentDidMount() {
    fetch(`https://moviesbar.herokuapp.com/movies/${this.state.id}`).then((resp) => {
      resp
        .json()
        .then((result) => {
          // console.log(result[0].id);
          this.setState({ data: result, error: false });
        })
        .catch((error) => {
          this.setState({ error: error });
        });
    });
  }
  render() {
    if (this.state.error) {
      return <div className="text-center">Something went wrong...!</div>;
    }
    return (
      <div className="container bg-light">
        <div className="row ">
          {this.state.data.map((datas) => {
            return (
              <div key={datas.id} className="col-md-3">
                <div className="card mt-3 mb-5 text-center" style={{ height: "85%" }}>
                  <div className="card-body">
                    <div className="card-header">{datas.name}</div>
                    <img src={datas.banner_image} className="card-img" alt="Movie" />
                    <div className="card-title">Release Date: {datas.release_date}</div>
                    <Link
                      to={{
                        pathname: `/details/${datas.id}`,
                        details: datas,
                      }}
                    >
                      <button
                        className="btn btn-primary"
                        onClick={(e) => this.setState({ id: datas.id })}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
