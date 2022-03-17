import React, {ReactElement} from "react";
import GameCard from "components/GameCard";
import {Game} from "types";
import {List, ListItem} from "./styles";


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
    <List>
      {games.map(game => {
        return (
          <ListItem key={game.id}>
              <GameCard content={game} />
          </ListItem>
        )
      })}
    </List>
  )
}
export default GameList;