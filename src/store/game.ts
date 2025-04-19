import { create } from "zustand";

type SquareValue = "X" | "O" | null;

type GameState = {
  squares: SquareValue[];
  setSquares: (
    next: SquareValue[] | ((prev: SquareValue[]) => SquareValue[])
  ) => void;
};

export const useGameStore = create<GameState>((set) => ({
  squares: Array(9).fill(null),
  setSquares: (nextSquares) => {
    set((state) => ({
      squares:
        typeof nextSquares === "function"
          ? nextSquares(state.squares)
          : nextSquares,
    }));
  },
}));
