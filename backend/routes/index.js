var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    // const urlSlug = req.params.urlSlug;
    const db = req.app.locals.db;

    const sql = `
    SELECT DISTINCT ON (game.title)
    game.title as game_title,
    game.url_slug,
    score.game_id as game_id,
    score.first_name as first_name,
    score.last_name as last_name,
    score.score as score,
    score.date as date
        
     FROM  game
       INNER JOIN score
       
       ON score.game_id =  game.id
     
       ORDER BY game.title, score.score DESC;
    

`;

    const result = await db.query(sql)
  

    res.render('index', {
        title: "Highscores",
        spel : result.rows

    });
});

module.exports = router;

//Alternativ 2 /

// const sql = `
// select * from game 
// INNER JOIN highscores
// ON highscores.game_id = game.id
// INNER JOIN players
// ON players.id = highscores.player_id`
// ;


//     const result = await db.query(sql)
//     const spel = {
//         title: result.rows[0].game_title,
//         info: result.rows.map(x => ({
//             title: x.title,
//             first_name: x.first_name,
//             last_name: x.last_name,
//             score: x.score,
//             date: x.date,
//             url_slug: x.url_slug

           


//         }))
//     };