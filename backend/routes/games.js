var express = require("express");
var router = express.Router();

/* GET search page. */
router.get("/:urlSlug", async function(req, res) {

    const urlSlug = req.params.urlSlug;

    const db = req.app.locals.db;

    const sql = `
 
    SELECT game.id,
    game.title as game_title,
    game.description as description, 
    game.genre as genre,
    game.image_url as image_url,
    game.lanseringsår as lanseringsår,
    game.url_slug as url_slug
    FROM game 
    WHERE url_slug = $1

 
`;
    const result = await db.query(sql, [urlSlug])
    const gamesDetails = result.rows[0];


const sql2 = `
 SELECT game.title as game_title,
 score.first_name as score_first_name,
 score.last_name as score_last_name,
 score.score as score_score,
 score.date as score_date
 FROM game
 INNER JOIN score 
 ON score.game_id = game.id
 where game.url_slug = $1
 ORDER BY score.score DESC LIMIT 10;

`;

const result2 = await db.query(sql2,[urlSlug]);
//const highscores = result2.rows[0]

    res.render("games/gamesDetails", {
        layout: 'admin/shared/layout',
        title: gamesDetails.title,
        gamesDetails,
        highscore: result2.rows,

    });
});

module.exports = router;