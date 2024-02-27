import React, { Component } from 'react'

class Page8 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 12,
            y: 20,
            str: "Welcome to React",
            isView: true,
            colors: ["blue", "red", "white"]
        }
    }

    render() {
        return (
            <div>
                <h1>States in class Component</h1>
                <h3> x = { this.state.x } </h3>
                <h3> { this.state.str } </h3>
                <h3> { this.state.isView ? "Say Hi" : "Sorry, Bye"} </h3>
                <h3> y =  { this.state.y } </h3>
                <br />

                <ol>
                    {
                        this.state.colors.map((item,index) => {
                            return (
                                <li key={index}> { item } </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}


export default Page8