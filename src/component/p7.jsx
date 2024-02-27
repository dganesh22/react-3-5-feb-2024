import React from 'react'

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



const Page7 = (props) => {

    return (
        <div>
            <h1>Variables in arrow functional component</h1>
            <h3> Name = { user.name } </h3>
        </div>
    )
}

export default Page7