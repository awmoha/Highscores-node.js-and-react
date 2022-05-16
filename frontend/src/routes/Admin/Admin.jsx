import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Admin = () => {
  return (
<>

<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Administration</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <Link to={"/"} className="nav-link px-3">Sign out</Link>
    </div>
  </div>
</header> 

<div className="  container-fluid">
  <div className="  row">
    <nav id="sidebarMenu" className="  col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="admin_table pt-3 ">
        <ul className="  nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <span data-feather="home"></span>
              Highscores
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link"  href="/admin/games">
              <span data-feather="file"></span>
              Admin
            </a>
          </li> */}
          <li className="nav-item">
            <Link to ={"game/new"}className="nav-link" >
              <span data-feather="file"></span>
              Add New spel
            </Link>
          </li>
          <li className="nav-item">
          <Link to ={"game/scores"} className="nav-link">
              <span data-feather="file"></span>
              Add New Highscore
            </Link>
          </li>
        </ul>

      </div>
    </nav>
    
    <main >
      <hr/>
<Outlet/>
     
    </main>
  </div>
</div>

</>
    )
}

export default Admin