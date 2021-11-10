import { Component } from "react";
import "../Css/Movie.css"

export default class Movie extends Component {

  handledivClick = () => {  
  }

  render() {
    console.log("hello");
    return (
      <>
        
        <div className="movie-card">
          <div className="movie-img" onClick={this.handledivClick}>
            <img
              src={this.props.data.poster_path ? `https://image.tmdb.org/t/p/original/${this.props.data.poster_path}` : "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"}
              alt="mypic"
            />
          </div>

          <div className="movie-info">
            <h2 className="fw-bold">

              {this.props.data.media_type === "movie" ?
                (this.props.data.title && this.props.data.title) :
                (this.props.data.name && this.props.data.name)
              }
              &nbsp;
              ({this.props.data.media_type === "movie" ?
                (this.props.data.release_date ? this.props.data.release_date.split("-")[0] : "NA") :
                (this.props.data.first_air_date && this.props.data.first_air_date.split("-")[0])
              })
            </h2>

            <h5 className="fw-bold">Overview</h5>
            <p className="movie-category">
              {this.props.data.overview ? this.props.data.overview : "NA"}
            </p>

            <div className="extra-details">
              <span> <strong> Released </strong> <br />
                {this.props.data.media_type === "movie" ?
                  (this.props.data.release_date ? this.props.data.release_date : "NA") :
                  (this.props.data.first_air_date ? this.props.data.first_air_date : "NA")
                }
              </span>
              <span> <strong> Language </strong> <br /> {this.props.data.original_language ? this.props.data.original_language : "NA"}</span>
            </div>

            <div className="extra-details">
              <span> <strong> Rating </strong> <br /> {this.props.data.vote_average ? this.props.data.vote_average : "NA"}</span>
              <span> <strong> Votes </strong> <br /> {this.props.data.vote_count ? this.props.data.vote_count : "NA"}</span>
            </div>

            <button className="btn btn-outline-dark">Watch now</button>

          </div>
        </div>

      </>
    );
  }
}
