import { useGameStore } from "../store/game";
import Square from "./Square";

export default function Board() {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);

  const handleClick = (index: number) => {
    if (squares[index]) return; // もしすでにクリックされている場合は何もしない

    const nextSquares = squares.slice(); // 現在の状態をコピー
    nextSquares[index] = "X"; // クリックされたマスに"X"をセット
    setSquares(nextSquares); // 状態を更新
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
