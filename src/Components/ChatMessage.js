import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='container d-flex  shadow mt-2'>
        <div>
            <img className='rounded-circle' style={{width:"25px",height:"25px",marginRight:"10px"}} src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" alt="user-icon"  />
            <b>{name}:</b>
            <p style={{marginLeft:"20px"}}>{message}</p>
        </div>
        
    </div>
  )
}

export default ChatMessage