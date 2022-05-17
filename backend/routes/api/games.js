var express = require("express");
var router = express.Router();
var authorize = require('../../middleware/authorize')
/* GET search page. */
router.get("/", async(req, res) => {

 const {title} = req.query;
  const db = req.app.locals.db;
  const game =title
  ? await searchGame(title,db)
  : await getGames(db);

res.json(game);

   
});

//Hämsta gamesDetails från
router.get("/:urlSlug", async(req, res) => {
  const { urlSlug } = req.params;
  const db = req.app.locals.db;
const gamesDetails = await getGamesDetails(urlSlug,db);
if(!gamesDetails) {
  res.status(404).send();
  return
}
res.json(gamesDetails);

});

//Hämta highscores per spel 

router.get("/:urlSlug/highscores", async(req, res) => {
  const { urlSlug } = req.params;

  const db = req.app.locals.db;
const highscoresGame = await getHighscoresGame(urlSlug,db);
if(!highscoresGame) {
  res.status(404).send();
  return
}
res.json(highscoresGame);

});

//Post game
router.post('/' , authorize, async(req,res) => {
  const {
    title,
  description,
  image_url,
  genre,
  lanseringsår
  }= req.body
const game = {
  title,
  description,
  image_url,
  genre,
  lanseringsår: parseFloat(lanseringsår),
  url_slug: generateURLSlug(title)
};
const db = req.app.locals.db;
game.id = await saveGame(game,db);
res.location(`/api/games/${game.url_slug}`);

res.status(201).send(game);

// if(!game) {
//   res.status(400).send();
//   return
// }

})
router.delete('/:urlSlug', authorize,async(req,res) => {
  const gameId = req.params.urlSlug;
  const db = req.app.locals.db;
  await deleteGame(gameId,db)
  
      //No Content
  res.status(204).send()
  
  })

async function deleteGame(urlSlug,db) {
  const sql = `
    DELETE FROM game 
    WHERE url_slug = $1    
  `;
await db.query(sql,[urlSlug]);
}
// router.delete('/:id', async(req,res) => {
//   const gameId = req.params.id;
//   const db = req.app.locals.db;
//   await deleteGame(gameId,db)

//       //No Content
//   res.status(204).send()

//   })

// async function deleteGame(id,db) {
//   const sql = `
//     DELETE FROM game
//     WHERE id = $1
//   `;
// await db.query(sql,[id]);
// }


router.put("/:urlSlug", async(req, res) => {
// let data = await getGamesDetails();
// let result = data.uppdateOne(
//   {title: req.params.title},
//   {$set: req.body}
// )
res.status(204).send()

})




async function searchGame (title,db) {
  const sql = `
  SELECT id,
  title,
  description,
  genre,
  lanseringsår,
  image_url,
  url_slug
  from game
  where title ILIKE '%' || $1 || '%'
  `;
  const result = await db.query(sql, [title]);
  return result.rows;
}



async function getGamesDetails(urlSlug,db) {
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

  const result = await db.query(sql,[urlSlug])
const gamesDetails= result.rows.length > 0
                    ? result.rows[0]
                    : undefined;
                    return gamesDetails;
}


async function getGames (db) {
const sql = `
SELECT DISTINCT ON (game.title)
game.id,
game.title as game_title,
game.url_slug,
score.game_id as game_id,
score.first_name as first_name,
score.last_name as last_name,
score.score as score,
score.date as date
    
 FROM  game
   LEFT JOIN score
   
   ON score.game_id =  game.id
 
   ORDER BY game.title, score.score DESC;


`;

//byt INNER till LEFT
const result = await db.query(sql)
 return result.rows
}


async function saveGame(game, db) {
  const sql = `
  INSERT INTO game(
      title,
      description,
      image_url,
      genre,
      lanseringsår,
      url_slug
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id

  `;

  const result = await db.query(sql,[
      game.title,
      game.description,
      game.image_url,
      game.genre,
      game.lanseringsår,
      game.url_slug

 ])
 return result.rows[0].id

}
const generateURLSlug = (title) =>
    title.replace('-', '')
        .replace(' ', '-')
        .toLowerCase();





        async function getHighscoresGame (urlSlug,db) {
          const sql = `
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
          
          //byt INNER till LEFT
          const result = await db.query(sql,[urlSlug])
          return result.rows;      
           }



        
module.exports = router;