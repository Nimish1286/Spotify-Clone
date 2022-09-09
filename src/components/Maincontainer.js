import React,{useEffect} from 'react'
import "../styles/Maincontainer.css";
import {Banner} from"./Banner";
import { FaUsers } from "react-icons/fa";
import { Audiolist } from './Audiolist';
function Maincontainer() {
  useEffect(() => {
    const allLi =document.querySelector('.menulist')
    .querySelectorAll("li");
    function changeMenuActive(){
        allLi.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
    }
    allLi.forEach(n => n.addEventListener('click',changeMenuActive));
  },[])



  return (
    <div className='maincontainer'>
      <Banner/>
      <div className='menulist'>
        <ul>
          <li><a href='#'>Popular</a></li>
          <li><a href='#'>Albums</a></li>
          <li><a href='#'>Songs</a></li>
          <li><a href='#'>Punjabi</a></li>
          <li><a href='#'>Top 50 India</a></li>
          <li><a href='#'>Top 50 Worldwide</a></li>
          <li><a href='#'>Diljit Dosanjh</a></li>
        </ul>
        <p><i><FaUsers/></i> 29.3M <span>Followers</span></p>
      </div>
      <Audiolist/>
    </div>
  )
}


export {Maincontainer};