import React from 'react'


class Screen1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Props in class component</h1>
                <h2> x = { this.props.x } </h2>
                <h2> y = { this.props.y  } </h2>
                <h2> str = { this.props.str  } </h2>
                <h2> boolean = { this.props.view ? "Say true": "Bye"  } </h2>
                <br />
                <ol>
                    {
                        this.props.colorList.map((item,index)=> {
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

export default Screen1