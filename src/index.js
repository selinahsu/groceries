import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
  
/*ReactDOM.render(
    <div>
        <ToDo />
    </div>,
    document.getElementById("root")
); */

var reptiles = ['alligator', 'snake', 'lizard'];

class ItemForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        this.props.onSubmit(event.target.value);
      //this.setState(() => reptiles.push(event.target.value));
    }

    render(){
        return (
            <h1>hi there</h1>
        );
    }
}

class ItemList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      //this.addItem = this.addItem.bind(this);
    }

    render(){
        return (
            <div>
                <div>
                    <ItemForm onSubmit={(newItem) => this.setState(() => reptiles.push(newItem))}/>
                </div>
                <div>
                    {reptiles}
                </div>
            </div>
        ); // this returns the array containing the list of items
    }
}

/*
ReactDOM.render(
    <div>
        <ItemForm />
    </div>, 
    document.getElementById("root")
);
*/

ReactDOM.render(
    <div>
        <ItemList />
    </div>,
    document.getElementById("list")
); 