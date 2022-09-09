import React from 'react'
import{BsFillVolumeUpFill,BsMusicNoteList} from "react-icons/bs";
import{FaDesktop} from "react-icons/fa";
import Track from "../img/track1.jpg";
function Tracklist() {
  
  return (
    <div className="tracklist">
        <div className='top'>
            <img src={Track} alt='' />
            <p className="trackname">
                Now Playing <span className='trackspan'></span>
            </p>
        </div>
        <div className='bottom'>
        <i><BsFillVolumeUpFill/></i>
        <input type="range"  />
        <i><BsMusicNoteList/></i>
        <i><FaDesktop/></i>
        </div>
    </div>
  )
}

export  {Tracklist}