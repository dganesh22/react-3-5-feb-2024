import React, { Component} from 'react'
import Calc from './Pages/Calc'
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='container'>
          <Calc/>
      </div>
    )
  }
}

export default App