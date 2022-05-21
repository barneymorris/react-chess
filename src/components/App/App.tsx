import { useEffect, useState } from "react";
import { Board } from "../../models/Board";
import { Colors } from "../../models/Colors";
import { Player } from "../../models/Player";
import { BoardComponent } from "../BoardComponent/BoardComponent";
import "./../../styles/styles.css";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.init();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="app">
      {/* <Timer restart={restart} currentPlayer={currentPlayer} /> */}
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        {/* <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} /> */}
        {/* <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} /> */}
      </div>
    </div>
  );
};

export default App;
