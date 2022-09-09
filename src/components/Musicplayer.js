import React, { useState,useRef,useEffect } from 'react'
import '../styles/Musicplayer.css';
import { FaBackward, FaForward, FaHeart,FaPause,FaPlay,FaRegHeart, FaShare, FaShareAlt, FaStepBackward, FaStepForward } from "react-icons/fa";
import { BsDownload} from "react-icons/bs";
function Musicplayer({song,imgsrc,auto}) {
    const [isLove, setLove] = useState(false);
    const [isPlaying, setPlay] = useState(false);
    //   duration state
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrenttime] = useState(0);
  
    const audioPlayer = useRef(); //   reference to our audio component
    const progressBar = useRef(); //   reference to our prgressbar
    const animationRef = useRef(); //  reference to our animation
  
    useEffect(() => {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
  
      // set max prop with out seconds in input[range]
      progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);
    const prevValue = isPlaying;
    const changePlayPause = () => {
      
      
  
      if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
      }
      setPlay(!prevValue);
    };
  
    const whilePlaying = () => {
      progressBar.current.value = audioPlayer.current.currentTime;
      changeCurrentTime();
      // need to run more than once
      animationRef.current = requestAnimationFrame(whilePlaying);
    };
  
    const calculateTime = (sec) => {
      const minutes = Math.floor(sec / 60);
      const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(sec % 60);
      const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${returnMin} : ${returnSec}`;
    };
  
    const changeProgress = () => {
      audioPlayer.current.currentTime = progressBar.current.value;
  
      // progressBar.current.style.setProperty(
      //   "--played-width",
      //   `${(progressBar.current.value / duration) * 100}%`
      // );
  
      // setCurrenttime(progressBar.current.value);
  
      changeCurrentTime();
    };
  
    const changeCurrentTime = () => {
      progressBar.current.style.setProperty(
        "--player--played",
        `${(progressBar.current.value / duration) * 100}%`
      );
  
      setCurrenttime(progressBar.current.value);
    };
  
    const changeSongLove = () => {
      setLove(!isLove);
    };
    


  return (
    <div className='musicplayer'>
        <div className='songimage'>
            <img src={imgsrc} alt=''></img>
        </div>
        <div className='songattributes'>
            <audio src={song} preload="metadata" ref={audioPlayer}/>
            <div className='top'>
                <div className='left'>
                    <div className='loved' onClick={changeSongLove}>
                    {isLove ? (<i><FaHeart/></i>):(
                    <i><FaRegHeart/></i>)}
                    </div>
                    <div className='download'><i>
                      
                      </i></div>
                </div>

                <div className='middle'>
                        <div className='back'>
                            <i><FaStepBackward/></i>
                            <i><FaBackward/></i>
                        </div>
                        <div className='playpause' onClick={changePlayPause}>
                        {
                            isPlaying ? (<i className='pause'><FaPause/></i>):(<i className='play'><FaPlay/></i>)
                        }
                        </div>
                        <div className='forward'></div>
                            <i><FaForward/></i>
                            <i><FaStepForward/></i>
                </div>
                <div className='right'>
                    <i></i>
                </div>
            </div>

            <div className='bottom'>
            <div className='currenttime'>{calculateTime(currentTime)}</div>
            <input type="range" min={0} max={duration} className='progressbar' 
            ref={progressBar} onChange ={changeProgress} autoPlay={auto}/>
            <div className='duration'>{duration && !isNaN(duration) &&
             calculateTime(duration) 
            ? calculateTime(duration) : "00:00"}
            </div>

            </div>
            
       
        </div>
    </div>
  )
}

export  {Musicplayer}