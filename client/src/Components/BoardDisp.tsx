import { Game } from "../../../types";
import { Board } from "../../../types";


import {ReactComponent as BlackBishop} from '../Assets/gamepieces/black_bishop.svg';
import {ReactComponent as BlackKing} from '../Assets/gamepieces/black_king.svg';
import {ReactComponent as BlackKnight} from '../Assets/gamepieces/black_knight.svg';
import {ReactComponent as BlackPawn} from '../Assets/gamepieces/black_pawn.svg';
import {ReactComponent as BlackQueen} from '../Assets/gamepieces/black_queen.svg';
import {ReactComponent as BlackRook} from '../Assets/gamepieces/black_rook.svg';
import {ReactComponent as BlackVanguard} from '../Assets/gamepieces/black_vanguard.svg';
import {ReactComponent as WhiteBishop} from '../Assets/gamepieces/white_bishop.svg';
import {ReactComponent as WhiteKing} from '../Assets/gamepieces/white_king.svg';
import {ReactComponent as WhiteKnight} from '../Assets/gamepieces/white_knight.svg';
import {ReactComponent as WhitePawn} from '../Assets/gamepieces/white_pawn.svg';
import {ReactComponent as WhiteQueen} from '../Assets/gamepieces/white_queen.svg';
import {ReactComponent as WhiteRook} from '../Assets/gamepieces/white_rook.svg';
import {ReactComponent as WhiteVanguard} from '../Assets/gamepieces/white_vanguard.svg';


export default function BoardDisp({ game }: { game: Board }) {
  const clickHandlerCreator = (row: number, col: number) => () => {
    const piece = game.board.arr[row][col];
    if (piece === null) return;
    const moves = piece.checkMoves(game.board);
    moves.forEach((move) => {});
  };
  return (
    <>
      {game.board.arr.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div
              className={(i + j) % 2 ? "black" : "col"}
              key={`${i}-${j}`}
              onClick={clickHandlerCreator(i, j)}
            >
              {col === null ? null : col.type === "pawn" ? (
                <BlackPawn/>
              ) : col.type === "knight" ? (
                <BlackKnight/>
              ) : col.type === "queen" ? (
                <BlackQueen/>
              ) : col.type === "king" ? (
                <BlackKing/>
              ) : col.type === "bishop" ? (
                <BlackBishop/>
              ) : col.type === "rook" ? (
                <BlackRook/>
              ) : col.type === "vanguard" ? (
                <BlackVanguard/>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
