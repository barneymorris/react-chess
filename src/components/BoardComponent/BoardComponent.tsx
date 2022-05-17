import React from "react";
import { Board } from "../../models/Board";
import { CellComponent } from "../CellComponent/CellComponent";

type Props = {
  board: Board;
  setBoard: (board: Board) => void;
};

export const BoardComponent: React.FC<Props> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, idx) => (
        <React.Fragment key={idx}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
