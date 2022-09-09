import React from 'react'
import {FaPlus} from "react-icons/fa";
import {Playlist} from"./Playlist";
import {BsMusicNoteList,BsTrash} from "react-icons/bs";
function Menuplaylist() {
  return (
    <div className="playlistcontainer">
        <div className="namecontainer">
            <p>Playlist</p>
            <i>
                
            </i>
            
            </div>
                <div className="playlistscroll">
                    {
                        Playlist && Playlist.map((list) =>(
                    
                    <div className="playlist" key={list.id}>
                    <i className='list'>
                    <BsMusicNoteList/>
                </i>
                <p>{list.name}</p>
                <i className='trash'>
                    
                </i>
                    </div>
                        ))}
                
                

                </div>
             </div>
  )
}

export {Menuplaylist}