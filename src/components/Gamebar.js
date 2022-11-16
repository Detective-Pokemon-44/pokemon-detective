import { useUsername } from './ContextUsername';
import { useScore } from './ContextScore';
import { useLocation } from './ContextLocation';

import Score from './Score';

export default function Gamebar() {
    const username = useUsername();
    const score = useScore();
    const location = useLocation();
    return (
        <div className="Gamebar">
            <span><Score /></span>
            <span className="Gamebar-title">{location ? `Welcome to ${location[0]}, ${username}!` : ""}</span>
            <span className='scoreCounter'>{score > 0 && `Cases Solved: ${score}`}</span>
        </div>
    )
}