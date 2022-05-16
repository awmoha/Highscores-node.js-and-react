import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SiteHeader = () => {

    const [ searchTerm, setSearchTerm ] = useState();

    let navigate = useNavigate();

    const handleSubmit = (event) => {
  
      event.preventDefault();
  
      navigate(`/search?q=${searchTerm}`);
    };

  return (
    <header className="row border border-dark">
            <nav className="header_site d-flex justify-content-center">
                <div className="logo_bild">
                    <a href="/">
                        <img src="https://via.placeholder.com/280x120.png?text=Highscore" alt="Highscore" />
                    </a>
                    <form  onSubmit={handleSubmit}>
                        <input className="input_header form-control" type="search" placeholder="Sök produkt" aria-label="Sök produkt" name="q"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}></input>
                    </form>
    
                </div>
    
            </nav>
    
        </header>
  )
}

export default SiteHeader