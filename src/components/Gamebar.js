import { useScore } from './ContextScore';

export default function Gamebar() {
    const score = useScore();
    return (
        <div className="Gamebar">
            <span>Quit</span>
            <span>{score && `Cases Solved: ${score}`}</span>
        </div>
    )
}