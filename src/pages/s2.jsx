import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Screen2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 10,
            b: 20
        }
    }

    render() {
        return (
            <div>
                <h1>Default Props</h1>
                <h2> product = { this.props.x * this.props.y } </h2>
                <hr />
                <h2> course = { this.props.course.title } </h2>

                <hr />

                <ol>
                    {
                        this.props.users.map((item,index) => {
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

// default props
Screen2.defaultProps = {
    x: 12,
    y: 232.343,
    str: "welcome to string",
    view: true,
    users: ["john", "david", "mohan", "simon"],
    course: {
        title: 'Reactjs',
        duration: '1.2month'
    }
};

// prop types
Screen2.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    str: PropTypes.string,
    view: PropTypes.bool,
    users: PropTypes.array,
    course: PropTypes.object,
}

export default Screen2