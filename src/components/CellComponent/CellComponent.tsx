import { Cell } from "../../models/Cell";

type Props = {
  cell: Cell;
};

export const CellComponent: React.FC<Props> = ({ cell }) => {
  return (
    <div className={["cell", cell.color].join(" ")}>
      {Boolean(cell.figure?.logo) && (
        <img src={cell.figure?.logo ?? ""} alt="figure" />
      )}
    </div>
  );
};
