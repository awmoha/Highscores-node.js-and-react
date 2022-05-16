import {Link } from "react-router-dom"

const GamesIndex = ({game}) => {
    return(
        <nav className="p-4  m-2 border border-dark ">
            < Link to={"/game/" + game.url_slug}>
                <div className="row ">
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-10 font-weight-bold">
                        <h2>
                        {game.game_title}
                        </h2>
                    </div>
    
                    <div className="col-1 col-sm-3 col-md-2 col-lg-1 col-xl-1">
                        <h3> {game.score}
                        </h3>
                    </div>
                </div>
                <div className=" row ">
                    <div className="col-5 col-sm-4 col-md-4 col-lg-4 col-xl-2 ">
                        <div>
                            {game.first_name} -
                                {game.last_name},
                                {/* const scoreDate = new Date ({game.date});
                                scoreDate.toLocaleDateString('se-SE');  */}
        
                        </div>
                    </div>
                </div>
            </Link>
        </nav>
        
    )
}

export default GamesIndex;