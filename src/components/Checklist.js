import React from "react";

class Checklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleList: [
        "Star Wars Episode IV - A New Hope",
        "Star Wars Episode V - The Empire Strikes Back",
        "Star Wars Episode VI - Return of the Jedi",
        "Star Wars Episode I - The Phantom Menace",
        "Star Wars Episode II - Attack of the Clones",
        "Star Wars Episode III - Revenge of the Sith",
        "Star Wars Episode VII - The Force Awakens",
        "Star Wars Episode IX"
      ],
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ checked: !this.state.checked });
    console.log(e.target);
  }

  render() {
    let showList = this.state.titleList.map((entry, index) => {
      //   if (entry === "Star Wars Episode IX") {
      //     return (
      //       <div key={index}>
      //         <input type="checkbox" disabled />
      //         {entry}
      //       </div>
      //     );
      //   }
      return (
        <div key={index}>
          <input
            type="checkbox"
            id={index}
            name={index}
            checked={this.state.checked === true}
            onClick={this.handleChange}
          />
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
