import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx"
function App() {
  return (
 <div>
       
    <SiteHeader/>
        <main className="p-4">
          <Outlet/>
        </main>

        <footer className=" ">
            <div className="navbar-light bg-light ">
                <div className=" col-12 text-center ">&#169; Highscore</div>
            </div>
        </footer>
        </div>
  );
}

export default App;
