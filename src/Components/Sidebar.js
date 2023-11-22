import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(isMenuOpen===false){
        return (
            <div>
                <ul style={{listStyle:"none"}}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li style={{padding:"5px"}}><IoMdHome size="25px" style={{marginRight:"5px"}} /></li>
                            <li style={{marginBottom:"20px"}}>Home</li>
                    </Link>
                    
                    <li style={{padding:"5px"}}><SiYoutubeshorts size="25px" color='black' style={{marginRight:"5px"}} /> </li>
                    <li style={{marginBottom:"20px"}}>Shorts</li>
                    <li style={{padding:"5px"}}><MdOutlineSubscriptions size="25px" color='black' style={{marginRight:"5px"}} /></li>
                    <li style={{marginBottom:"20px",marginLeft:"0px"}}>Subscriptions</li>
                    <li style={{padding:"5px"}}><MdOutlineVideoLibrary size="25px" color='black' style={{marginRight:"5px"}} /></li>
                    <li style={{marginBottom:"20px"}}>You</li>
                    
                </ul>
            </div>
        )
    }
  return (
    <div className=''>
        <ul style={{listStyle:"none"}}>
            <li style={{padding:"3px"}}><IoMdHome size="25px" style={{marginRight:"5px"}} />Home</li>
            <li style={{padding:"3px"}}><SiYoutubeshorts size="25px" color='black' style={{marginRight:"5px"}} /> Shorts</li>
            <li style={{padding:"3px"}}><MdOutlineSubscriptions size="25px" color='black' style={{marginRight:"5px"}} />Subscriptions</li>
        </ul>
        <hr/>
        <ul style={{listStyle:"none"}}>
          
            <li style={{padding:"3px"}}><GoHistory size="22px" style={{marginRight:"5px"}}/>History</li>
            <li style={{padding:"3px"}}><FaRegClock size="22px" style={{marginRight:"5px"}}/>Watch Later</li>
            <li style={{padding:"3px"}}><MdOutlineThumbUpAlt size="22px" style={{marginRight:"5px"}}/>Liked Videos</li>
        </ul>
        <hr/>
        <h4 style={{margin:"7px"}}>Subscriptions</h4>
        <ul style={{listStyle:"none",margin:"5px"}}>
            <li style={{padding:"3px"}}><IoMdMusicalNote size="22px" style={{marginRight:"5px"}}/>Music</li>
            <li style={{padding:"3px"}}><CiTrophy size="22px" style={{marginRight:"5px"}}/>Sports</li>
            <li style={{padding:"3px"}}><SiYoutubegaming size="22px" style={{marginRight:"5px"}}/>Gaming</li>
        </ul>
        <h4 style={{margin:"7px"}}>Explore</h4>
        <ul style={{listStyle:"none",margin:"5px"}}>
            <li style={{padding:"3px"}}><FaFire size="22px" style={{marginRight:"5px"}}/>Trending</li>
            <li style={{padding:"3px"}}><AiOutlineShopping size="22px" style={{marginRight:"5px"}}/>Shopping</li>
            <li style={{padding:"3px"}}><FaRegNewspaper size="22px" style={{marginRight:"5px"}}/>News</li>
            <li style={{padding:"3px"}}><FaRegNewspaper size="22px" style={{marginRight:"5px"}}/>News</li>
            <li style={{padding:"3px"}}><FaRegNewspaper size="22px" style={{marginRight:"5px"}}/>News</li>
        </ul>
    </div>
  )
}

export default Sidebar