import React from 'react'
import Artist from "../img/artist2.jpg";
import Check from "../img/check.png";
import { FaEllipsisH,FaHeadphones,FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className='banner'>
        <img src={Artist} alt="" className='bannerimg' />
   
    <div className='content'>
        <div className='breadcrump'>
        <p>Home
            <span>
                /Popular Artist
            </span>
        </p>
        <i>
            <FaEllipsisH/>
        </i>
        </div>
        <div className='artist'>
        <div className='left'>
            <div className='name'>
                <h2>One Direction</h2>
                <img src={Check} alt=""/>
            </div>
            <p>
                <i>
                    <FaHeadphones/>
                    </i>
                    15,169,1212
            <span>
                Monthly Listeners
            </span>
            </p>
        </div>
        <div className='right'>
            <a href="#">Play</a>
            <a href="#"><i><FaCheck/></i>Following</a>
        </div>
        </div>
    </div>
    <div className='bottomlayer'></div>
    </div>
  )
}

export  {Banner}