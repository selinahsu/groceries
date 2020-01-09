import React, { Component } from 'react'

export default class Items extends Component {
    render () {
      // title1, title2, handleDelete are props that get modified in List.js in an instance of the "Items" component
      const {title1, title2, handleDelete} = this.props; 
        return (
          <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <div className="todo-icon">
            <span>{title1}</span>
            <span> | </span>
            <span>{title2}</span>
            <div id="float-right">
              <span class="glyphicon glyphicon-ok" onClick={handleDelete}></span> 
            </div>
            </div>
          </li>
        );
    }
}