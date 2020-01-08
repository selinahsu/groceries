  
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Inputs from './Inputs.js'
import List from './List.js'
import 'bootstrap'
import { getElementError } from "@testing-library/react";

class App extends React.Component {
    state ={
        items: [],
        id: Date.now(),
        item: "",
        editItem: false
    };

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };

    // handle Submit prevents page from refreshing
    handleSubmit = (e) => {
        e.preventDefault(); 
        
        const newItem = {
            id: this.state.id, 
            title: this.state.item
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems, 
            item: "",
            id: Date.now(),
            editItem: false
        });
    };
    
    render () {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div>
                            <h1>Add Item</h1>
                            <Inputs item={this.state.item} 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}/>
                            <List items={this.state.items}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));