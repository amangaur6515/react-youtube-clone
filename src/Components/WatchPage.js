import React, { useDebugValue, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [searchParams]=useSearchParams()
    
    const id=searchParams.get("v")
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (  
    <>
    
    <div className='d-flex  mt-3' style={{}}>
        <div>
          <iframe width="650" height="370" className='rounded'
          src={"https://www.youtube.com/embed/"+id}
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </iframe>
        </div>
        <div className='rounded m-1 p-2' style={{border:"1px solid black",width:"100%",backgroundColor:"#E8E8E8"}}>
          <h6>Live Chat</h6>
          <LiveChat/>
        </div>
    </div>
    
    <CommentsContainer/>
    </>
  )
}

export default WatchPage