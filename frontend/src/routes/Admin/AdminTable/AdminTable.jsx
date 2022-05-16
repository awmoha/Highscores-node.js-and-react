import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AdminTable = () => {


  const [ games, setGames ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/games")
      .then(resp => resp.json())
      .then(games => setGames(games));
  }, []);

  const deleteGame = (id) => {
    fetch(`http://localhost:5000/api/games/${id}`, {
      method: "DELETE"
    }).then(resp => {
      const filteredgames = games.filter(x => x.id != id);
      setGames(filteredgames)
     // console.log( x.id);
    });
  }
  return (
<>
    <div>AdminTable</div>
   
    <div className="container ">
    <table className="table table-striped table-hover  ">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
          {games.map(game => ( 
                <tr key={game.game_id}>
                    <td>{game.game_id}</td>
                    <td>{game.game_title}</td>

                    <td>
                    <button className="btn btn-danger"
                    onClick={() => deleteGame(game.game_id)}>
                     Radera
                     </button>
                      </td>
                </tr>

            ))}
        </tbody>
    </table>

</div>
 </>
  )
}

export default AdminTable