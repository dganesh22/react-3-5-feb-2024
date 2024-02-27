import React, { useState } from 'react'

function Page13(props) {
    // const [state,handler] = useState(init value)
    const [num,setNum] = useState(1)

    const addVal = (val) => {
        setNum(num + val)
    }

    return (
        <div>
            <h1>States in functional component</h1>
            <h3> num = { num } </h3>

            <hr />

            <button onClick={() => addVal(10)} >Add + 10</button>
            <button onClick={() => addVal(20)} >Add + 20</button>
        </div>
    )
}

export default Page13