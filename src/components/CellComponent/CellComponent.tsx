import { Cell } from "../../models/Cell";

type Props = {
  cell: Cell;
};

export const CellComponent: React.FC<Props> = ({ cell }) => {
  return <div className={["cell", cell.color].join(" ")}>{cell.figure}</div>;
};
