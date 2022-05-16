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
    <header className=" header_site row border border-dark">
            <nav className="header_site d-flex justify-content-center">
                <div className="logo_bild">
                    <a href="/">
                        <img src="https://via.placeholder.com/280x120.png?text=Highscore" alt="Highscore" />
                    </a>
                    <form  onSubmit={handleSubmit}>
                        {/* <input className="input_header form-control" type="search" placeholder="Sök produkt" aria-label="Sök produkt" name="q"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}></input>
                     */}
                    <div class="container">

                       <div class="group">      
                       <input  className="input_header" type="search" name="q"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}></input><span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="label_header">Search here</label>
                          </div>
                              </div>
                   
                      </form>
                </div>
            </nav>  
        </header>
  )
}

export default SiteHeader