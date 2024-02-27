import React, { Component } from 'react'

class Page11 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: "home"
        }
    }

    toggle(item) {
        this.setState({
            val: item
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <a onClick={() => this.toggle('home')} href="#">Home</a>
                    <a onClick={() => this.toggle('about')} href="#">About</a>
                    <a onClick={() => this.toggle('services')} href="#">Services</a>
                </nav>

                <section className="container">
                    {
                        this.state.val === "home" ? (
                            <div className="tab-item">
                                <div className="title">
                                    <h1>Home Tab</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolores aliquid cum corporis qui nulla atque minus culpa possimus illo iure, dolorem laboriosam autem fuga quas itaque ad esse. Architecto!</p>
                                </div>
                            </div>
                        ): null
                    }
                    {
                        this.state.val === "about" ? (
                            <div className="tab-item">
                                <div className="title">
                                    <h1>About Tab</h1>
                                    <img src="https://picsum.photos/400/400" alt="no image" />
                                </div>
                            </div>
                        ): null
                    }
                    {
                        this.state.val === "services" ? (
                            <div className="tab-item">
                                <div className="title">
                                    <h1>Services Tab</h1>
                                    <ul>
                                        <li>Course</li>
                                        <li>JObs</li>
                                        <li>HR</li>
                                        <li>Interviews</li>
                                    </ul>
                                </div>
                            </div>
                        ): null
                    }
                </section>
            </div>
        )
    }
}

export default Page11