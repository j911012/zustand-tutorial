import { useGameStore } from "../store/game";
import Square from "./Square";

export default function Board() {
  const squares = useGameStore((state) => state.squares);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setSquares = useGameStore((state) => state.setSquares);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const player = xIsNext ? "X" : "O"; // 現在のプレイヤーを決定

  const handleClick = (index: number) => {
    if (squares[index]) return; // もしすでにクリックされている場合は何もしない

    const nextSquares = squares.slice(); // 現在の状態をコピー
    nextSquares[index] = player; // クリックされたマスに"X"をセット
    setSquares(nextSquares); // 状態を更新
    setXIsNext(!xIsNext); // 次のプレイヤーを更新
  };

  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
