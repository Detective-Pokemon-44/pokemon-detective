import { useScore } from './ContextScore';

export default function Gamebar() {
    const score = useScore();
    return (
        <div className="Gamebar">
            <span>Quit</span>
            <span>{score > 0 && `Cases Solved: ${score}`}</span>
        </div>
    )
}