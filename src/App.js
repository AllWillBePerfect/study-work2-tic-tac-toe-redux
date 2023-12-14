import './App.css';
import React from "react";
import Board from "./components/Board";
import {useSelector} from "react-redux";

function AppRedux() {
    const xIsNext = useSelector((state) => state.counterRedux.xIsNext)
    const currentSquares = useSelector((state) => state.counterRedux.currentSquares)

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares}/>
            </div>
        </div>
    );
}


export default AppRedux;
