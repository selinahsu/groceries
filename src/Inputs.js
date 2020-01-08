import React, { Component } from 'react'

export default class Inputs extends Component {
    render () {
        const {item, handleChange, handleSubmit} = this.props
        return (
            <div>
                {/* <h1>this is inputs.js</h1> */}
                <form onSubmit={handleSubmit}>
                    <div className = "input-group">
                        <div className = "input-group-prepend">
                            <div className = "input-group-text">
                                <input type="text" className = "form-control" 
                                    placeholder="Add Item"
                                    value={item}
                                    onChange={handleChange}/>
                                <button type="submit" className="btn btn-block btn-primary mt-3">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}