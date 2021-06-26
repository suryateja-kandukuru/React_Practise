import React, { Component } from 'react'
import ChildComp  from './ChildComp'
export default class SimpleList extends Component {
    render() {
        // Approch 1 is using map method inside template
        // Apprach 2 is direct interpolation of already mapped array 
        // Approch 3 is using map to child component and passing prop item
        // when using map always add key with unique id.
        const items = ['item1', 'item2', 'item3']
        const newItems = items.map((item) => (<h3 key= {item}>{ item }</h3>))
        return (
           <div>
            <div>
                { items.map((item) => (<h3 key={ item }>{ item }</h3>)) }
            </div>
            <br />
            <br />
            <br />
            { newItems }
            <br />
            <br />
            <br />
            <div>
                { items.map((item) => <ChildComp key={ item } item={ item }  />) }
            </div>
           </div>
        )
    }
}
