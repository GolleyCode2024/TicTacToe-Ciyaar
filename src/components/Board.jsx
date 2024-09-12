import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = clickPosition => {
    if (squares[clickPosition]) {
      return;
    }
    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickPosition === position) {
          return isXNext ? 'X' : '0';
        }
        return squareValue;
      });
    });
    setIsXNext(prevCurrent => !prevCurrent);
  };

  const renderSquare = clickPosition => {
    return (
      <Square
        value={squares[clickPosition]}
        onClick={() => handleSquareClick(clickPosition)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
