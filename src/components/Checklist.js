import React from "react";

class Checklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        "Star Wars Episode IV - A New Hope",
        "Star Wars Episode V - The Empire Strikes Back",
        "Star Wars Episode VI - Return of the Jedi",
        "Star Wars Episode I - THe Phantom Menace",
        "Star Wars Episode II - Attack of the Clones",
        "Star Wars Episode III - Revenge of the Sith",
        "Star Wars Episode VII - The Force Awakens"
      ]
    };
  }

  render() {
    let showList = this.state.list.map((entry, index) => {
      return (
        <div key={index}>
          <input type="checkbox" />
          {entry}
        </div>
      );
    });
    return (
      <React.Fragment>
        <h1>Coming from Checklist Component</h1>
        <em>List</em>
        {showList}
      </React.Fragment>
    );
  }
}

export default Checklist;
