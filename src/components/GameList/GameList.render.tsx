import React, {ReactElement} from "react";
import GameCard from "components/GameCard";
import {Game} from "types";


interface Props {
  err?: string
  games: Game[]
}

const GameList = ({err, games} : Props) : ReactElement => {
  if (err) {
    return <p>게임을 가져올 수 없습니다. (Unable to fetch gaems) </p>
  }
  if (!games?.length) {
    return <p>사용가능한 게임이 없습니다. (No games available) </p>
  }
  return (
    <ul>
      {games.map(game => {
        return (
          <li key={game.id}>
              <GameCard content={game} />
          </li>
        )
      })}
    </ul>
  )
}
export default GameList;