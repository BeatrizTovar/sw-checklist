"use strict"

class AppContainer extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div>
        <AppJumbotron title="Stuff" />
        <ItemList />
        <br />
        <br />
        <br />
        <ItemCount count={allTheThings.length} />
        <hr />
        <AppFooter />
      </div>
    );
  }
}

class Item extends React.Component { //checkkbox
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

let item2 = <Item message="a new message" />;
let item3 = <Item message="another message" />;
let item4 = <Item message="one more task" />;

let allTheThings = [item2, item3, item4];

class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

class ItemCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h4>There are {this.props.count} items on your list</h4>
    );
  }
}

class AppJumbotron extends React.Component {
  render (){
    return (
      <div className="jumbotron">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

class AppFooter extends React.Component {
  render (){
    return (
      <div className="text-muted">
        <small>&copy; {new Date().getFullYear()}</small>
      </div>
    );
  }
}

let target = document.getElementById('app');
ReactDOM.render(<AppContainer />, target);
