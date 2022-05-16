import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
const GamesDetails = () => {

    const [gamesDetails,setGamesDetails] = useState();
    const {urlSlug} = useParams ();
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/games/${urlSlug}`)
        .then(resp => resp.json())
        .then(gamesDetails => setGamesDetails(gamesDetails));
      },[])

      return (
          <>
          {gamesDetails && 

     <section className="row mb-4">
    <div className="container">
       <div className="row">
           <img src={gamesDetails.image_url} className="mx-2 col-4" />
           <div className="col-7">
               <h1 className="mb-3"> {gamesDetails.game_title} </h1>
               <div className="mb-3">{gamesDetails.lanseringsår}, {gamesDetails.genre} </div>
               <div className="mb-3">{gamesDetails.description}</div>
            </div>
       </div> 
    </div>
    </section>
}
          </>
      )

}

export default GamesDetails