import React, { Component } from 'react'

export default class Inputs extends Component {
    render () {
        const {item, handleNameChange, handleDateChange, handleSubmit} = this.props
        return (
            <div>
                {/* <h1>this is inputs.js</h1> */}
                <form onSubmit={handleSubmit}>
                    <div id="form" class = "col-sm-3">
                        <h1>Add Item</h1>
                            <input 
                                type="text" 
                                className = "form-control" 
                                placeholder="Add Item"
                                value={item}
                                onChange={handleNameChange}/>

                            <input 
                                type="date"
                                className = "form-control"
                                onChange={handleDateChange}/>

                            <button type="submit" className="btn btn-block btn-primary mt-3">Add</button>      
                    </div>
                </form>
            </div>
        );
    }
}