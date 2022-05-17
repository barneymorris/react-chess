import { useCallback, useEffect, useState } from "react";
import { Board } from "../../models/Board";
import { BoardComponent } from "../BoardComponent/BoardComponent";

const App = () => {
  const [board, setBoard] = useState(new Board());

  const restart = useCallback(() => {
    const newBoard = new Board();
    newBoard.init();
    newBoard.addFigures();
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    restart();
  }, [restart]);

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
