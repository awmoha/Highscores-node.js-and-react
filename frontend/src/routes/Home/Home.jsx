import Games from "../../components/Games"
import {useEffect, useState} from 'react';
const Home =() => {

  const [games, setGames] = useState([])

  useEffect (() => {
fetch('http://localhost:5000/api/games')
.then(x => x.json()).
then(games =>setGames(games))

  },[])

    return(
        <>
        <Games games={games} />
        </>
    )
};
export default Home;