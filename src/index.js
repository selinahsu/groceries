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
        date: "",
        editItem: false
    };

    handleNameChange = e => { // e for event
        this.setState({
            item: e.target.value
        });
    };

    handleDateChange = e => { // e for event
        this.setState({
            date: e.target.value
        });
    };

    // handle Submit prevents page from refreshing
    handleSubmit = (e) => {
        e.preventDefault(); 
        
        const newItem = {
            id: this.state.id, 
            title1: this.state.item,
            title2: this.state.date
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems, 
            item: "",
            date: "",
            id: Date.now(),
            editItem: false
        });
    };

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => 
            item.id !== id)
            this.setState({
                items: filteredItems
            });
    };
    
    render () {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div>
                            <Inputs item={this.state.item} 
                                handleNameChange={this.handleNameChange}
                                handleDateChange={this.handleDateChange}
                                handleSubmit={this.handleSubmit}/>
                            <List items={this.state.items} handleDelete={this.handleDelete}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));