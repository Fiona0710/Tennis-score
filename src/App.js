import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import { ResetButton } from "./ResetButton";
import { PointScoredButton } from "./PointScoredButton";
import { Playerscore } from "./Playerscore"
import { PlayerPoints } from "./PlayerPoints";

export default function App() {
  return (
    <div>
      <PlayerPoints playerId="player1" playerName="Player 1" />
      <PlayerPoints playerId="player2" playerName="Player 2" />
      <Display />
      <Playerscore playerId="player1" playerName="Player 1"/>
      <Playerscore playerId="player2" playerName="Player 2"/>
      <div className="buttons-row">
        <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
        <PointScoredButton playerId="player2">Point Joueur 2</PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}