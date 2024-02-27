import React from 'react'

let user = {
    name: 'john',
    email: 'john@gmail.com',
    age: 24,
    isUser: true
}


function Page5(props) {

    let nums = [12,44,44,55,66,33]

    let colors = ['red', 'green', 'blue', 'white']

    
    return (
        <div>
            <h1>Primitive Variables</h1>
            <h4> name = { user.name } </h4>
            <hr />
            
            <ul>
                {
                    nums.map((item,index) => {
                        return (
                            <li key={index}> {index} { item } </li>
                        )
                    })
                }
            </ul>

            <hr />

            <div>
                {
                    colors.map((item,index) => {
                        return (
                            <li key={index}> { item } </li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page5