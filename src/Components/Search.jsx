import React, { Component } from "react";
import Movie from "./Movie";
import "../Css/Movie.css";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
      error: "",
    };
  }

  setInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  callAPI = () => {
    if (this.state.name) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=00fb9978821f8cb2136b747c4912c21b&query=${this.state.name}`
      )
        .then((res) => res.json())
        .then((res) => this.setState({ data: res.results, error: "" }))
        .catch((err) => err.json);
    } else {
      this.setState({
        name: "",
        error: "There are no movies that matched your query.",
      });
    }
  };

  trendingApi = () => {
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=eff1052c16083b84e128bc48df2ffbe1")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.results }))
      .catch((err) => err.json);
  }

  componentDidMount() {
    this.trendingApi()
  }

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <div className="form-outline ">
            <h2 className="text-white fw-bold">
              Discover your favorite movies, TV shows and more.
            </h2>
            <input
              type="search"
              id="form1"
              className="form-control search"
              placeholder="
              Search for a movie, tv show..."
              value={this.state.name}
              onChange={this.setInput}
              autoComplete="off"
            />
            <label className="form-label" htmlFor="form1">
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={this.callAPI}
              >
                <i className="bi bi-search">&nbsp; Search</i>
              </button>
            </label>
          </div>
        </div>

        {this.state.data.length ? (
          <>
            {/* <h2 className=" mt-3 mb-3">
              Search Result for '{this.state.name}'
            </h2> */}
            {this.state.data.map((val) => {
              if (val.media_type === "tv" || val.media_type === "movie") {
                return (
                  <>
                    <Movie data={val} key={val.id} search={this.state.name} />
                  </>
                );
              }
            })}
          </>
        ) : (
          <div className="mt-5 bg-danger">
            <h3 className="text-center ">{this.state.error}</h3>
          </div>
        )}
        

        {!this.state.data.length ? (
          <>
            {this.state.data.map((val) => {
              if (val.media_type === "tv" || val.media_type === "movie") {
                return (
                  <>
                    <Movie data={val} key={val.id} search={this.state.name} />
                  </>
                );
              }
            })}
          </>
        ) : (
          <div className="mt-5">
            <h3 className="text-center ">{this.state.error}</h3>
          </div>
        )}






      </div>
    );
  }
}
