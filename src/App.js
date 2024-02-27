import React from 'react'
import './App.css'
import Page1 from './component/p1'
import Page2 from './component/p2'
import Page3 from './component/p3'
import Page4 from './component/p4'
import Page5 from './component/p5'
import Page6 from './component/p6'
import Page7 from './component/p7'
import Page8 from './component/p8'
import Page9 from './component/p9'
import Page10 from './component/p10'
import Page11 from './component/p11'
import Page12 from './component/p12'
import Page13 from './component/p13'
import Page14 from './component/p14'
import Page15 from './component/p15'
import Screen1 from './pages/s1'
import Screen2 from './pages/s2'
import Screen3 from './pages/s3'
import Screen4 from './pages/s4'

// react functional component (js constructor)
function App(props) {
  let colors = ['red', 'green', 'blue']
  return (
    <div>
        {/* <Screen1 x={123} y={55} str={'reactjs'} view={true} colorList={colors} /> */}
        {/* <Screen3 x={123} y={55} str={'reactjs'} view={true} colorList={colors} /> */}
        <Screen4/>
    </div>
  )
}

export default App


