import React from 'react'
import {Link} from "react-router-dom"
const GamesSearch = ({game}) => {
  return (
   
<nav class="p-4  m-4 ">
   
        <Link to={"/game/" + game.url_slug}>
            <div class="row  border border-dark mb-4">

                <div class="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-10 font-weight-bold">
                    <h2>
                    {game.title}
                    </h2>
                    <div>
                    {game.genre},
                    {game.lanseringsår}
                    </div>
                </div>

                <div class="p-1 col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <img src={game.image_url} />
                </div>
            </div>
        </Link>
     
</nav>
  )
}

export default GamesSearch