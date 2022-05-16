import React from 'react'
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

const NewScores = () => {


  const navigate = useNavigate();

  const [ games, setGames ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/games")
      .then(resp => resp.json())
      .then(games => setGames(games));
      console.log(games);
  }, []);

       //console.log(games);
    //    fetch(`http://localhost:5000/api/games/${id}`, {
    //     method: "DELETE"
    //   }).then(resp => {
    //     const filteredgames = games.filter(x => x.id != id);
    //     setGames(filteredgames)
    //    // console.log( x.id);
    //   });
    // }

  const [ game_id, setGameId ] = useState("");
  const [ first_name, setFirst_name ] = useState("");
  const [ last_name, setLast_name ] = useState("");
  const [ date, setDate ] = useState("");
  const [ score, setScore ] = useState(0);

  

  const handleSubmit=(event) => {
    event.preventDefault();
  
  const scores = {
    game_id,
    first_name,
    last_name,
    date,
    score
  } 
  fetch("http://localhost:5000/api/games",{
  method: "POST",
  headers:{
    "Content-Type" :"application/json"

  },
  body:JSON.stringify(scores)
}).then(resp => {
navigate('/admin/')
});
};
  
 

  return (
      <>
    
    <h1>NewScore</h1>
    <form onSubmit={handleSubmit} className="mx-5 mt-5">

    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
      
        <label for="exampleFormControlSelect1">spel</label>

        <select 
        className="form-select mt-3" 
        id="exampleFormControlSelect1"
        //value={title}
        onChange={(e) => setGameId(e.target.value)}
        >
              {games.map(x => ( 

        <option value={x.game_id}>{x.game_title}</option>
        ))}

        </select>

    </div>

    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">First Name</label>
        <input type="text"
          className="form-control mt-3" 
          id="exampleFormControlInput1"
          placeholder="First Name" 
          value={first_name}
        onChange={(e) => setFirst_name(e.target.value)}/>
    </div>
    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">Last Name</label>
        <input type="text"
          className="form-control mt-3" 
          id="exampleFormControlInput1"
          placeholder="Last Name" 
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}/>
    </div>
    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">Datum</label>
        <input type="date" 
        className="form-control mt-3" 
        id="exampleFormControlInput1"
        value={date}
        onChange={(e) => setDate(e.target.value)}/>
    </div>

    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">poäng</label>
        <input 
        type="number" 
         className="form-control mt-3" 
         id="exampleFormControlInput1"
         value={score}
         onChange={(e) => setScore(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary mt-4">Lägg till</button>


</form>
  </>
  )
}

export default NewScores