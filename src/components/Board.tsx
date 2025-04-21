import { useGameStore } from "../store/game";
import {
  calculateStatus,
  calculateTurns,
  calculateWinner,
} from "../utils/game";
import Square from "./Square";

export default function Board() {
  const squares = useGameStore((state) => state.squares);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setSquares = useGameStore((state) => state.setSquares);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const player = xIsNext ? "X" : "O"; // 現在のプレイヤーを決定
  const winner = calculateWinner(squares); // 勝者を判定
  const turns = calculateTurns(squares); // 残りのターン数を計算
  const status = calculateStatus(winner, turns, player); // ゲームの状態を計算

  const handleClick = (index: number) => {
    if (squares[index] || winner) return; // もしすでにクリックされている場合もしくは勝者がいる場合は何もしない

    const nextSquares = squares.slice(); // 現在の状態をコピー
    nextSquares[index] = player; // クリックされたマスに"X"をセット
    setSquares(nextSquares); // 状態を更新
    setXIsNext(!xIsNext); // 次のプレイヤーを更新
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
}
