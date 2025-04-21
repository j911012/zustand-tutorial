import { SquareValue } from "../store/game";

export function calculateWinner(squares: SquareValue[]): SquareValue | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function calculateTurns(squares: SquareValue[]): number {
  return squares.filter((square) => square === null).length;
}

export function calculateStatus(
  winner: SquareValue,
  turns: number,
  player: "X" | "O"
): string {
  if (!winner && turns === 0) return "Draw";
  if (winner) return `Winner: ${winner}`;
  return `Next player: ${player}`;
}
