import calculateWinner from "../data/CalculateWinner";
import Square from "./Square";
import {handlePlay} from "../redux/CounterRedux";
import {useDispatch} from "react-redux";

export default function Board({xIsNext, squares}) {
    const dispatch = useDispatch()
    function onClickListener(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        console.log(".....UI..... = " + i.toString() + ",,,, xIsNext = " + xIsNext.toString())
        dispatch(handlePlay(i))
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Победитель: ' + winner;
    } else {
        status = 'Игрок: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => onClickListener(0)}/>
                <Square value={squares[1]} onSquareClick={() => onClickListener(1)}/>
                <Square value={squares[2]} onSquareClick={() => onClickListener(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => onClickListener(3)}/>
                <Square value={squares[4]} onSquareClick={() => onClickListener(4)}/>
                <Square value={squares[5]} onSquareClick={() => onClickListener(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => onClickListener(6)}/>
                <Square value={squares[7]} onSquareClick={() => onClickListener(7)}/>
                <Square value={squares[8]} onSquareClick={() => onClickListener(8)}/>
            </div>
        </>
    );
}