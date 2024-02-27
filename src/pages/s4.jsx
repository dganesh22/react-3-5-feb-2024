import React from 'react'

function Screen4() {
  return (
    <div>
        <h1 style={{ color: 'green', textAlign: 'center' }} >Default Props in Functional component</h1>
    </div>
  )
}


// default props
Screen4.defaultProps = {
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


export default Screen4