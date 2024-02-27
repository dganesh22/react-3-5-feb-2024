import React from 'react'

function Screen3(props) {

    const { y, str, view } = props
    return (
        <div>
            <h1>Props in functional component</h1>
            <h3> x = { props.x } </h3>

            <hr />

            <h3> y = { y } </h3>
        </div>
    )
}

export default Screen3