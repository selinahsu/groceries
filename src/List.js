import React, { Component } from 'react'
import Items from './Items'

export default class List extends Component {
    render () {
        const {items} = this.props
        return (
            <div>
                {/* <h1>this is list.js</h1> */}

                <ul className="list-group my-5">
                    <h1>Groceries</h1>
                    {items.map(item =>{
                    return(
                        <Items key={item.id} title={item.title}/>
                    );
                    })}
                    
                </ul>
            </div>
        );
    }
}