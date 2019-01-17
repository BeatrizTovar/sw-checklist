import React from "react";

class Checklist extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            list = [
                "Star Wars Episode IV - A New Hope",
                "Star Wars Episode V - The Empire Strikes Back",
                "Star Wars Episode VI - Return of the Jedi",
                "Star Wars Episode I - THe Phantom Menace",
                "Star Wars Episode II - Attack of the Clones",
                "Star Wars Episode III - Revenge of the Sith",
                "Star Wars Episode VII - The Force Awakens"
            ]
        }
    };


  render() {
    return (
      <React.Fragment>
        <h1>Coming from Checklist Component</h1>
      </React.Fragment>
    );
  }
}

export default Checklist;
