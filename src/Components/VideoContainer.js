import React, { useEffect } from 'react'
import {YT_API} from '../Utils/constants'
import {useState} from 'react'
import VideoCard from './VideoCard'
const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const  getVideos=async ()=>{
        const data=await fetch(YT_API)
        const json=await data.json();
        const arr=json.items
        setVideos(arr)
    }
    useEffect(()=>{
        getVideos();
    },[])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                {videos.map((info)=>(
                    <div>
                        <VideoCard info={info}/>
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default VideoContainer