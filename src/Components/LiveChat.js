import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice'

const LiveChat = () => {
    const dispatch=useDispatch()
    const chatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i=setInterval(()=>{
            //api polling
            console.log("api polling ")
            dispatch(addMessage({
                name:"Sohan",
                message:"Lorem ipsum dolar",
            }))
        },2000)

    },[])
  return (
    <div className='container '>
        {chatMessages.map((c,i)=><ChatMessage
            key={i}
            name={c.name}
            message={c.message}
        />)}
    </div>
  )
}

export default LiveChat