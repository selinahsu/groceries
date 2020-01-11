import React, { Component } from 'react'
import Items from './Items'

export default class List extends Component {
    render () {
        const {items, handleDelete} = this.props;
        return (
            <div>
                {/* <h1>this is list.js</h1> */}
                <ul id="hide" className="list-group my-3">
                    <img src="yourlist.png" width="300px"/>
                    {items.map(item =>{
                    return( // the following items are props
                        <div>
                            <Items 
                            key={item.id} 
                            title1={item.title1} 
                            title2={item.title2}
                            handleDelete={() => handleDelete(item.id)}/> 
                        </div>
                    );
                    })}
                    
                </ul>
            </div>
        );
    }
}