import React, { Component } from 'react'

export default class Items extends Component {
    render () {
      const {title} = this.props;
        return (
            <div>
              {/* <h1>this is items.js</h1> */}
              <h1>{title}</h1>
            </div>
        );
    }
}