import React, { useEffect } from 'react'
import {YT_API} from '../Utils/constants'
const VideoContainer = () => {
    const  getVideos=async ()=>{
        const data=await fetch(YT_API)
    }
    useEffect(()=>{
        getVideos();
    },[])
  return (
    <div></div>
  )
}

export default VideoContainer