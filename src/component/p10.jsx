import React, { Component } from 'react'

class Page10 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qnty: 1
        }
    }

    incHandler() {
        this.setState({
            qnty: this.state.qnty + 1
        })
    }

    decHandler() {
        if(this.state.qnty <= 1) {
            this.setState({
                qnty: 1
            })
        } else {
            this.setState({
                qnty: this.state.qnty - 1
            })
        }
    }

    render() {
        return (
            <div>
                <h1>State Example</h1>
                <div className='App'>
                    <button onClick={() => this.decHandler()} >-</button>
                    <h1> { this.state.qnty } </h1>    
                    <button onClick={() => this.incHandler()}>+</button>
                </div>                
            </div>
        )
    }
}

export default Page10