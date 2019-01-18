import React from "react";
import { Form, Checkbox } from "semantic-ui-react";

class ChecklistV2 extends React.Component {
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
      ]
      //   checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // debugger;
    // console.log(e.target.id);
    // this.setState({ checked: !this.state.checked });
    this.setState({ [e.target.id]: e.target.checked });
    console.log(this.state[e.target.id]);
    // console.log(this.state.titleList[e.target.id]);
  }

  render() {


    let showList = this.state.titleList.map((entry, index) => {
      if (entry === "Star Wars Episode IX") {
        return <Checkbox key={index} id={index} label={entry} disabled />;
      }
        return (
            <Checkbox
                key={index}
                id={entry}
                label={entry}
                checked={console.log(this.state[entry])}
                onClick={this.handleChange}
            />
        );
    });

    return (
      <React.Fragment>
        {/* {console.log(this.state)} */}
        ChecklistV2
        <Form>{showList}</Form>
      </React.Fragment>
    );
  }
}

export default ChecklistV2;


// class ChecklistV2 extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             checked: false
//         }
        
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick (e) {
//         this.setState({
//             checked: !this.state.checked
//         })
//     }

//     render() {


//         return (
//             <React.Fragment>


//             </React.Fragment>
//         )
     

//     }
    
// }
// export default ChecklistV2;
