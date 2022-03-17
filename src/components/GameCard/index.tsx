import React, { ReactElement } from "react";
import { Game } from "types";
import { StyledLink, Img, Title, Details, Description, Genre } from "./style"

interface Props {
  content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre } = content

  const link = `/game/${id}`

  return (
    <StyledLink to={link}>
      <Img alt={`${title}-logo`} src={thumbnail} />
      <Details>
        <Title>{ title }</Title>
        <Description>{ short_description }</Description>
        <Genre>{ genre }</Genre>
      </Details>
    </StyledLink>
  )
}

export default GameCard;



