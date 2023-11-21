import React from 'react'
import logo from '../Images/logo.jpg'
const Head = () => {
  return (
    <div className='mx-3 mt-2 ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className='' alt='hamburger-menu' src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" width="25px" height="25px" />
        <img className=""  alt="logo" src={logo} width="180px" height="30px" />
      </div>
      <div>
        <input  type="text" placeholder="Search" style={{ margin: '0 0px', padding: '5px',width:"500px",border:"1px solid black", borderRadius:"50px 0px 0px 50px"}}  />
        <button  style={{border:"1px solid black",borderRadius:"0px 50px 50px 0px",padding: '5px'}}>Search</button>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img alt="bell-icon" src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png" width="25px" height="25px" />
        <img className='mx-3' alt="user-icon" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width="30px" height="25px" />
      </div>
      
    </div>
  )
}

export default Head