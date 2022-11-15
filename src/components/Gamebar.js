import { useScore } from './ContextScore';
import Score from './Score';

export default function Gamebar() {
    const score = useScore();
    return (
        <div className="Gamebar">
            <span><Score /></span>
            <span>{score > 0 && `Cases Solved: ${score}`}</span>
        </div>
    )
}