import './App.css';
import {useState} from "react";
import {observer} from "mobx-react-lite";
import CounterClass from "./mobx/Counter";
import Board from "./components/Board";

const AppMobx = observer(() => {
    const [counter] = useState(() => CounterClass)

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={counter.xIsNext} squares={counter.currentSquares} onPlay={counter.handlePlay}/>
            </div>
        </div>
    );
})


export default AppMobx;
