var express = require("express");
var router = express.Router();

/* GET search page. */
router.get("/", async function(req, res) {
    const db = req.app.locals.db;


//const allGames = await getAllGames(db);



    res.render("newGame/nyaspel", {
        layout: 'admin/shared/layout',
        title: "Nytt spel"
        });
});

router.post("/", async function(req, res) {

    const {
        title,
        description,
        image_url,
        genre,
        lanseringsår
    } = req.body;

     const games = {
         title,
         description,
         image_url,
         genre,
         lanseringsår: parseFloat(lanseringsår),
         url_slug: generateURLSlug(title)
     };

    const db = req.app.locals.db;
    await getGames(games,db)

    res.redirect('/admin/games'); 
});


const generateURLSlug = (title) =>
    title.replace('-', '')
        .replace(' ', '-')
        .toLowerCase();


 async function getGames(games, db) {
       const sql = `
       INSERT INTO game(
           title,
           description,
           image_url,
           genre,
           lanseringsår,
           url_slug
           ) VALUES ($1, $2, $3, $4, $5, $6)
       `;

       await db.query(sql,[
           games.title,
           games.description,
           games.image_url,
           games.genre,
           games.lanseringsår,
           games.url_slug

      ])
  }
    

//   async function getAllGames(db) {
//       const sql = `
//       SELECT id,
//       title,
//       description,
//       image_url,
//       genre,
//       lanseringsar,
//       url_slug
//  FROM game
// `;
// const result = await db.query(sql);
// return result.rows;

//  }

module.exports = router;


