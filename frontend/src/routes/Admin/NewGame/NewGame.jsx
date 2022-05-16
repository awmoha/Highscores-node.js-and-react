import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const NewGame = () => {

  const navigate = useNavigate();

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ image_url, setImage_url ] = useState("");
  const [ genre, setGenre ] = useState("");
  const [ lanseringsår, setLanseringsår ] = useState(0);


  

const handleSubmit=(event) => {
  event.preventDefault();

const game = {
  title,
  description,
  image_url,
  genre,
  lanseringsår
} 
fetch("http://localhost:5000/api/games",{
  method: "POST",
  headers:{
    "Content-Type" :"application/json"

  },
  body:JSON.stringify(game)
}).then(resp => {
navigate('/admin/')
});
};

  return (
<>
    <h1>NewGame</h1>

    <form onSubmit={handleSubmit}  className="mx-5 mt-5">
    <div className="form-group col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">Title</label>
        <input 
        type="text" 
        className="form-control mt-3" 
        id="exampleFormControlInput1"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
    </div>
    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlTextarea1">Beskrivning</label>
        <textarea className="form-control mt-3 "
         id="exampleFormControlTextarea1"
          rows="3"
          value={description}
        onChange={(e) => setDescription(e.target.value)}>
        </textarea>
    </div>

    <div  className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlSelect1">Bild</label>
        <input 
        type="text" 
        className="form-control mt-3" 
        id="exampleFormControlInput1"
        placeholder="https://via.placeholder.com/150x150?text=XXXX"
        value={image_url}
        onChange={(e) => setImage_url(e.target.value)}
   />

    </div>
    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlSelect1">Genre</label>
        <input
         type="text" 
         className="form-control mt-3" 
         id="exampleFormControlInput1"
         placeholder="Genre" 
         value={genre}
        onChange={(e) => setGenre(e.target.value)}/>

    </div>

   
    <div className="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">Lanseringsår</label>
        <input 
        type="number"
         className="form-control mt-3" 
         id="exampleFormControlInput1"
         placeholder="Lanseringsår" 
         value={lanseringsår}
        onChange={(e) => setLanseringsår(e.target.value)}/>
    </div>

    <button  className="btn btn-primary mt-4">Lägg till</button>

</form>
 
  </>
  );
};

export default NewGame