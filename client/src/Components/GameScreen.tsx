import React from "react";
import "./components.css";
import BoardDisp from "./BoardDisp";
import { Location } from "history";
import { Game } from "../../../types";

export default function GameScreen({
  location: { state },
}: {
  location: Location<Game>;
}) {
  const game = state;
  return (
    <div className="screen">
      <div className="boardBox">
        <BoardDisp game={game} />
      </div>
    </div>
  );
}
