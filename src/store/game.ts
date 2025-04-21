import { create } from "zustand";

export type SquareValue = "X" | "O" | null;

type GameState = {
  squares: SquareValue[];
  xIsNext: boolean;
  setSquares: (
    next: SquareValue[] | ((prev: SquareValue[]) => SquareValue[])
  ) => void;
  setXIsNext: (next: boolean | ((prev: boolean) => boolean)) => void;
};

export const useGameStore = create<GameState>((set) => ({
  squares: Array(9).fill(null),
  xIsNext: true,
  setSquares: (nextSquares) => {
    set((state) => ({
      squares:
        typeof nextSquares === "function"
          ? nextSquares(state.squares)
          : nextSquares,
    }));
  },
  setXIsNext: (nextXIsNext) => {
    set((state) => ({
      xIsNext:
        typeof nextXIsNext === "function"
          ? nextXIsNext(state.xIsNext)
          : nextXIsNext,
    }));
  },
}));
