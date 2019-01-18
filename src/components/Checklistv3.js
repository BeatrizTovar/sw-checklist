import React, { Component } from "react";
import { getMovies } from "../components/services/MovieService";
import { Container } from 'semantic-ui-react'

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
    // if (obj[index] == true){
    //   obj[index].isChecked = true
    // }
    obj[index].isChecked = !obj[index].isChecked 
    this.setState({ movies: obj})

    // this.setState({
    //   checked: e.target.checked
    //   // checked: !this.state.checked
    // });
    // console.log(e.target.checked);
    console.log(index)
  }

  render() {


    const movieList = this.state.movies.map((item, index) => {
      return (
        <div key={item.id} className="row">
          <div className="col-md-3">
            <input key={item.id} type="checkbox" onClick={e => this.handleClick(e, index)} />
            <label>{item.title}</label>
            <hr />
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        {console.log(this.state.movies)}
        ChecklistV3
        <div className="container">
            <div>{movieList}</div>
          </div>
      </React.Fragment>
    );
  }
}

export default Checklistv3;
