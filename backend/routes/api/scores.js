var express = require("express");
var router = express.Router();

router.get("/highscores", async(req, res) => {
   const db = req.app.locals.db;
   const score=  await getScores(db);
   res.status(200).send(score);
 res.json(score);
 });


 router.post('/' , async(req,res) => {
  const {
    game_id,
    first_name,
    last_name,
    date,
    score
}= req.body;

const players = {
    game_id,
    first_name,
    last_name,
    date,
    score
}
const db = req.app.locals.db;
players.id = await saveScore(players,db);

res.status(201).send(players);


})




 async function getScores (db) {
  const sql = `
  SELECT DISTINCT ON (game.title)
  game.title as game_title,
  score.score as score
   FROM  game
     LEFT JOIN score
     ON score.game_id =  game.id
     ORDER BY game.title, score.score DESC;
  `;
  const result = await db.query(sql)
  return result.rows
 }



 async function saveScore(players, db) {
  const sql = `
  INSERT INTO score(
    game_id,
      first_name,
      last_name,
      date,
      score
      ) VALUES ($1, $2, $3, $4, $5)
      RETURNING id

  `;

  const result = await db.query(sql,[
    players.game_id,
    players.first_name,
    players.last_name,
    players.date,
    players.score

 ])
 return result.rows

}





























// router.post('/',(req,res) => {
//     const {
//       title,
//       first_name,
//       last_name,
//       date,
//       score,
    
//     }= req.body
//   const scores = {
//     title,
//       first_name,
//       last_name,
//       date,
//       score
//   };
//   console.log(scores);
  
//   res.status(201).send();
// })



// async function getTitle (db) {
//     const sql = `
//     SELECT id,
//     title  
//     FROM game
    
    
//     `;
    
//     const result = await db.query(sql)
//      return result.rows
//     }













  module.exports = router;