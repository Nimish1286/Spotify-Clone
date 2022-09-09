import React,{useState, useEffect} from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import { Musicplayer } from './Musicplayer';
import {Songs} from "./Songs";


function Audiolist() {
    const[songs,setsongs]=useState(Songs);
    const [song,setsong]=useState(Songs[0].song);
    const[img, setimg] =useState(Songs[0].imgsrc);
    const[auto,setauto]=useState(false);
        useEffect(() => {
        const songs =document.querySelectorAll(".songs");
        function changeMenuActive(){
            songs.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
        songs.forEach(n => n.addEventListener('click',changeMenuActive));
      },[])




    const changeFavourite =(id) =>{
        Songs.forEach((song) =>{
            if(song.id == id){
                song.favourite = !song.favourite;
            }
        });
        setsongs([...Songs]);
    };
    const setMainsong =(songsrc,imgsrc) =>{
        setsong(songsrc);
        setimg(imgsrc);
        setauto(true);
    }
  return (
    <div className='audiolist'>
        <h2 className='title'>
        The List <span> {Songs.length} songs</span>
        </h2>
        <div className='songcontainer'>
            {
                Songs && Songs.map((song, index)=>(

              
            <div className='songs' key={song.id}
            onClick ={() =>setMainsong(song?.song, song?.imgsrc)}
            >
                <div className='count'>#{index+1}</div>
                <div className='song'>
                    <div className='imgbox'>
                        <img src={song?.imgsrc} alt=''/>
                    </div>
                    <div className='section'>
                        
                            <p className='songname'>
                                {song?.songName}
                                <span className='spanartist'>{song?.artist}</span>

                            </p>
                            <div className='hits'>
                                <p className='hit'>
                                    <i><FaHeadphones/></i>85,120,888
                                </p>
                                <p className='duration'>
                                    <i><FaRegClock/></i>
                                    03.05
                                </p>
                                <div className='favourite' onClick ={() =>changeFavourite(song?.id)}>
                                    {
                                        song?.favourite?
                                        <i>
                                        <FaHeart/>
                                    </i>
                                    :
                                    <i>
                                    <FaRegHeart/>
                                </i>
                                    }
                                    
                                    
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
            ))
        }
        </div>
        <Musicplayer song={song} imgsrc={img} autoplay={auto}/>
    </div>
  )
}

export  {Audiolist}