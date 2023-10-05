import { useSelector } from "react-redux";
import { selectPlayerHasAdvantage, selectPlayerHasScore, selectPointBeforeWin } from "./selectors"
// fonction réutilisable dans d'autres composant idealement a deplacer
// dans un fichier a part selector.js


export function Playerscore({ playerId, playerName}) {
    const score = useSelector(selectPlayerHasScore(playerId));
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
    const pointsBeforeWin = useSelector(selectPointBeforeWin(playerId))
    return (
        <div className= "player-score">
            <p>
              {playerName}
              {pointsBeforeWin === null
                ? ""
                : ` (encore ${pointsBeforeWin} ${
                    pointsBeforeWin > 1 ? "points" : "point"
                  })`}
            </p>
            <p>{(hasAdvantage ? "Avantage - " : "") + score}</p>
        </div>
    )
}