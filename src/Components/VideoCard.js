import React from 'react'
import { formatDistanceToNow } from 'date-fns';
import { LuDot } from "react-icons/lu";
const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {thumbnails,localized}=snippet
    const url=thumbnails.high.url
    const publishedAt = new Date(snippet.publishedAt);
    const formattedDate = formatDistanceToNow(publishedAt, { addSuffix: true });
    function formatViewCount(viewCount) {
        if (viewCount >= 1e9) {
          return (viewCount / 1e9).toFixed(1) + 'B';
        } else if (viewCount >= 1e6) {
          return (viewCount / 1e6).toFixed(1) + 'M';
        } else if (viewCount >= 1e3) {
          return (viewCount / 1e3).toFixed(1) + 'K';
        } else {
          return viewCount.toString();
        }
      }
    
    const viewCount = statistics.viewCount;
    const formattedViewCount = formatViewCount(viewCount);
   
  return (
    
    <div className='mt-3 mb-3 card'   style={{border:"0px"}} >
        <img style={{borderRadius:"10px"}} className="" src={url} alt="Card image cap" s />
        <div className="card-body" >
            <div className='d-flex'>
                <img className='rounded-circle' style={{width:"45px",height:"45px",marginRight:"10px"}} src={url} alt="Card image cap"  />
                <h6 className="card-title">{snippet.title}</h6>
            </div>
            
            <p className="card-text" style={{color:"gray",marginLeft:"50px"}}>{snippet.channelTitle}<br/>{formattedViewCount} views<LuDot/>{formattedDate} </p>
            
        </div>
    </div>
    
  )
}

export default VideoCard