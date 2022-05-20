import { Cell } from "../../models/Cell";

type Props = {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
};

export const CellComponent: React.FC<Props> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.avaiable && cell.figure ? "green" : "" }}
    >
      {Boolean(cell.avaiable && !cell.figure) && (
        <div className="avaiable"></div>
      )}
      {Boolean(cell.figure?.logo) && (
        <img src={cell.figure?.logo ?? ""} alt="figure" />
      )}
    </div>
  );
};
