import React, { Component } from "react";
import { getMovies } from "../components/services/MovieService";
import "../Movies.css"

class ChecklistV3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleClick(e, index) {
    let obj = JSON.parse(JSON.stringify(this.state.movies))
    obj[index].isChecked = !obj[index].isChecked
    this.setState({ movies: obj })
  }

  render() {

    const movieList = this.state.movies.map((item, index) => {
      let title = item.isChecked === true ? <span className="checked">{item.title}</span> : <span>{item.title}</span>

      if (item.title == "Star Wars Episode IX") {
        return (
          <div key={item.id} className="movie-entry">
            <div >
              <input className="movie-checkbox" key={item.id} type="checkbox" disabled />
              <label>{title}</label>
            </div>
          </div>
        )
      }
      return (
        <div key={item.id} className="movie-entry">
          <div>
            <input className="movie-checkbox" key={item.id} type="checkbox" onClick={e => this.handleClick(e, index)} />
            <label>{title}</label>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="movie-container title">
          <span>CheckList</span>
        </div>
        <div className="movie-container">
          <div>{movieList}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChecklistV3;
