import React, { Component } from "react";
import { getMovies } from "../components/services/MovieService";
import { Container } from 'semantic-ui-react'
import '../Movies.css'

class Checklistv3 extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleClick(e, index) {

    console.log(this.state.movies[index])

    let obj = JSON.parse(JSON.stringify(this.state.movies))
    obj[index].isChecked = !obj[index].isChecked
    this.setState({ movies: obj })

    // this.setState({
    //   checked: e.target.checked
    //   // checked: !this.state.checked
    // });
    // console.log(e.target.checked);
    console.log(index)
  }

  render() {


    const movieList = this.state.movies.map((item, index) => {
      let title = item.isChecked === true ? <em>{item.title}</em> : <span>{item.title}</span>

      if (item.title == "Star Wars Episode IX") {
        return (
        <div key={item.id} className="movie-entry">
          <div >
            <input className='movie-checkbox' key={item.id} type="checkbox" disabled />
            <label>{title}</label>
            <hr />
          </div>
        </div>
        )
      }
      return (
        <div key={item.id} className="movie-entry">
          <div>
            <input className='movie-checkbox' key={item.id} type="checkbox" onClick={e => this.handleClick(e, index)} />
            <label>{title}</label>
            <hr />
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        {console.log(this.state.movies)}
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

export default Checklistv3;
