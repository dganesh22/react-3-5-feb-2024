import React, { Component } from 'react'


const x = 123.56
const y = 234

let str = "Hello world"
const status = false 

let user = {
    name: 'john',
    email: 'john@gmail.com',
    age: 24,
    isUser: true
}

let nums = [12,44,44,55,66,33]

let colors = ['red', 'green', 'blue', 'white']



class Page6 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Variables inside class Component</h1>
                <h3> x = { x } </h3>
            </div>
        )
    }
}

export default Page6