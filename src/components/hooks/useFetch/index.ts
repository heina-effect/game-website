import { useState, useEffect } from "react";
import axios from "axios";
import { Game } from "types";
import { Filter } from "components/GameFilter";
import { API_HOST, API_KEY } from "./constans";

type Response = {
  games: Game[]
  errer?: string
}

const useFetch = (params: Filter) : Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const {platform, genre, tag, sortBy} = params;

  useEffect( () => {
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key' : API_KEY,
          'x-rapidapi-host' : API_HOST,
        },
        params : {
          platform, category: genre, tag, 'srot_by': sortBy
        },
      })
      .then(res => setGames(res.data))
      .catch(e => setErr(e.massage))
  },[platform, genre, tag, sortBy])
  return {
    games,
    errer: err
  }
}

export default useFetch;


