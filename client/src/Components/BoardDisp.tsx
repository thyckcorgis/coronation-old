import { Board } from "../../../types";
export default function BoardDisp({ board }: { board: Board }) {
  return (
    <>
      {board.arr.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div className="col" key={`${i}-${j}`}>
              {/* Piece or null */}
              {JSON.stringify(col)}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
