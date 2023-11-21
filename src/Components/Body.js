import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='d-flex row mt-2'>
        <div className='col-md-2'>
            <Sidebar/>
        </div>
        <div className='col-md-10' style={{border:"2px solid black"}}>
            <MainContainer/>
        </div>
        
    </div>
  )
}

export default Body