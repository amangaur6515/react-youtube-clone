import React from 'react'
import logo from '../Images/logo.jpg'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'
import { IoSearchOutline } from "react-icons/io5";
import { IoMicCircle } from "react-icons/io5";
const Head = () => {
    const dispatch=useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className=' mt-2 ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginLeft:"35px" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img onClick={()=>toggleMenuHandler()} style={{cursor:"pointer"}} alt='hamburger-menu' src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" width="25px" height="25px" />
        <img style={{cursor:"pointer"}}  alt="logo" src={logo} width="150px" height="30px" />
      </div>
      <div>
        <input  type="text" placeholder="Search" style={{ margin: '0 0px', padding: '5px',width:"600px",border:"1px solid black", borderRadius:"50px 0px 0px 50px"}}/>
        <button  style={{border:"1px solid black",borderRadius:"0px 50px 50px 0px",padding: '5px'}}><IoSearchOutline size="19px" style={{width:"50px"}}/></button>
        
        <IoMicCircle className='mx-3'  size="50px"/>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img alt="bell-icon" src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png" width="25px" height="25px" />
        <img className='mx-3' alt="user-icon" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width="30px" height="25px" />
      </div>
      
    </div>
  )
}

export default Head