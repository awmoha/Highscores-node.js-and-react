import React ,{useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom"
import GamesSearch from "../../components/GamesSearch/GamesSearch"
const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [games, setGames] = useState([]);
    const searchTerm = searchParams.get('q')

    useEffect(() => {
        fetch(`http://localhost:5000/api/games?title=${searchTerm}`)
          .then(resp => resp.json())
          .then(games =>setGames(games));
      },[])

  return (
<>
<section className="search-results mb-4">
<div className="text-center mb-4">
  Hittade {games.length} produkter
</div>
<div className="row">
  {games.map(game => (
    <GamesSearch game={game} key={game.id} />
  ))}
</div>
</section>
</>  )
}

export default SearchResults