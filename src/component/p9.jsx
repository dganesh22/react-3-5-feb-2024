import React, { Component } from 'react'

class Page9 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    handleNum(val) {
        console.log('val '+ val)
        // this.state.num = val 
        this.setState({
            num: this.state.num + val
        })
    }

    render() {
        return (
            <div>
                <h1>State in Class Component</h1>
                <h1>Num = { this.state.num } </h1>

                <hr />
                <button onClick={() => this.handleNum(1)} >Add + 1</button>
                <button onClick={() => this.handleNum(5)} >Add + 5</button>
            </div>
        )
    }
}

export default Page9