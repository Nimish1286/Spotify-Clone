import React from "react";
import "../styles/Leftmenu.css";

import { FaSpotify,  FaEllipsisH ,FaSearch} from "react-icons/fa";
import { Menu } from "./Menu";
import {Menulist} from "./Menulist";
import { Menuplaylist } from "./Menuplaylist";
import {Tracklist} from"./Tracklist";

function Leftmenu() {
  return (
    <div className="leftmenu">
      <div className="logoContainer"> 
        <i>
         <FaSpotify />
       </i>
        <h2>Spotify</h2>
        <i>
         <FaEllipsisH />
       </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search...."/>
        <i className="searchIcon">
          <FaSearch />
        </i>
      </div>

    <Menu title={'Menu'} menuObject={Menulist}/>
    <Menuplaylist />
    <Tracklist />
    </div>
  );
}

export { Leftmenu };