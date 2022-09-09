import React,{ useEffect } from 'react'
import { Menulist } from './Menulist';


function Menu({title, menuObject}) {
  useEffect(() => {
    const allLi =document.querySelector('.MenuContainer ul').querySelectorAll("li");
    function changeMenuActive(){
        allLi.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
    }
    allLi.forEach(n => n.addEventListener('click',changeMenuActive));
  },[])
  
  
    return (
    <div className='MenuContainer'>
        <p className='title'>{title}</p>
    <ul>
        {
            menuObject && menuObject.map((menu) =>(
                <li key={menu.id}>
                   
                    <a href="#">
                        <i>
                            {menu.icon}
                        </i>
                        <span>{menu.name}</span>
                    </a>
                </li>
            ))
        }
    </ul>
    </div>
  )
}

export {Menu};