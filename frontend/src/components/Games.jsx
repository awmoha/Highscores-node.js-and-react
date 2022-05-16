import React from 'react'
import {Link} from "react-router-dom" 
import GamesIndex from "./GamesIndex/GamesIndex"


 const Games = ({games}) => {
  return (
 <div>
     <Link to={"admin"}>
     <h2 className="admin text-center mb-4"> Highscores</h2>
     </Link>
     <div className="row">
     {games.map((game) => (
         <GamesIndex key ={game.id}game={game} />
     ))}
         </div> 
 </div>
  )
}


export default Games