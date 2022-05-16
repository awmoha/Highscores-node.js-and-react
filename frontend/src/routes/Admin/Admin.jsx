import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Admin = () => {
  return (
<>

<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Administration</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <Link to={"/"} class="nav-link px-3">Sign out</Link>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              <span data-feather="home"></span>
              Highscores
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link"  href="/admin/games">
              <span data-feather="file"></span>
              Admin
            </a>
          </li> */}
          <li class="nav-item">
            <Link to ={"game/new"}class="nav-link" >
              <span data-feather="file"></span>
              Add New spel
            </Link>
          </li>
          <li class="nav-item">
          <Link to ={"game/scores"} class="nav-link">
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