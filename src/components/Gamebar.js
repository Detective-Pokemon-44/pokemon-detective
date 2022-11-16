import { useUsername } from './ContextUsername';
import { useScore } from './ContextScore';
import { useLocation } from './ContextLocation';
import React, { useState } from "react"
import Score from './Score';

export default function Gamebar() {
    const [width, setWidth] = useState(window.innerWidth)
    const username = useUsername();
    const score = useScore();
    const location = useLocation();

    window.addEventListener("resize", function(){
        setWidth(window.innerWidth);
        })
    return (
        <div className='Gamebar'>
            <span>
            <Score />
            </span>
            <span
            className={width > 750 
                ? 'Gamebar-title' :'Gamebar-title Gamebar-below'
            }
            >
            {location ? `Welcome to ${location[0]}, ${username}!` : ''}
            </span>
            <span className='scoreCounter'>
                {score > 0 && `Cases Solved: ${score}`}
            </span>
        </div>
    )
}