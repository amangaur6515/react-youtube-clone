import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className=''>
        <div className=' row mt-2'>
        <div className='col-md-2' >
            <Sidebar/>
        </div>
        <div className='col-md-10' >
            <MainContainer/>
        </div>
        
    </div>
    </div>
    
  )
}

export default Body