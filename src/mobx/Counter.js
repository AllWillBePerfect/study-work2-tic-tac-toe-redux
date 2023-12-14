import {makeObservable, observable} from "mobx";

class Counter {
    history = [Array(9).fill(null)];
    currentMove = 0;

    constructor() {
        this.xIsNext = this.currentMove % 2 === 0;
        this.currentSquares = this.history[this.currentMove];
        console.log(" -- history = " + this.history.toString())
        makeObservable(this, {
            xIsNext: observable,
        })
    }

    handlePlay = (nextSquares) => {
        console.log(":::::arguments nextSquares: " + nextSquares
            .toString())
        const nextHistory = [...this.history.slice(0, this.currentMove + 1), nextSquares];
        this.history = nextHistory;
        this.currentMove = nextHistory.length - 1;
        this.xIsNext = this.currentMove % 2 === 0
        console.log("click" + nextSquares.toString() + " -- currentMove = " + this.currentMove.toString() + " -- currentSquares = " + this.currentSquares.toString() + " -- history = " + this.history.toString())
    }

}

const CounterClass = new Counter()
export default CounterClass;