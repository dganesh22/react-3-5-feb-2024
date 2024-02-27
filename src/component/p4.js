import React from 'react'

const x = 123.56
const y = 234


function Page4(props) {
    let str = "Hello world"
    const status = false 

    return (
        <div>
            <h1>Local Variables</h1>
            <h2> x = { x } </h2>
            <h2> y = { y } </h2>
            <h2> sum = { x + y } </h2>
            <h2> product = { x * y } </h2>
            <hr />
            <h3> { str } </h3>
            <h2> status = { status ? "Say Hi" : "Bye"} </h2>
        </div>
    )
}

export default Page4