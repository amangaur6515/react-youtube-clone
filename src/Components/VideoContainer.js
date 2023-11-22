import React, { useEffect } from 'react'
import {YT_API} from '../Utils/constants'
import {useState} from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const  getVideos=async ()=>{
        const data=await fetch(YT_API)
        const json=await data.json();
        const arr=json.items
        console.log(arr)
        setVideos(arr)
    }
    useEffect(()=>{
        getVideos();
    },[])
  return (
    <div className='container d-flex flex-column'>
        <div className='row'>
            
                {videos.map((info)=>(
                    <div className='col-md-4'  id={info.id}>
                       <Link to={"/watch?v="+info.id+"&ab_channel="+info.snippet.channelTitle} style={{ textDecoration: 'none', color: 'inherit' }}><VideoCard key={info.id} info={info}/></Link> 
                    </div>
                        
                   
                ))}
           

        </div>

    </div>
  )
}

export default VideoContainer