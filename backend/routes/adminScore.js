var express = require("express");
var router = express.Router();

/* GET search page. */
router.get("/", async function(req, res) {
    const db = req.app.locals.db;
    const sql = `
SELECT id,
title  
FROM game
`;
    const result = await db.query(sql)

    res.render("admin/adminScore", {
        layout: 'admin/shared/layout',
        title: "Sök score",
        admin: result.rows

    });
});

router.post("/", async function(req, res) {
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
    await getplayers(players,db)
    //await getplayers2(players,db)

   res.redirect("/"); 
});


async function getplayers(players,db){
    const sql = `
  INSERT INTO score(
      game_id,
        first_name,
        last_name,
        date,
        score
        ) VALUES ($1, $2, $3, $4, $5)
    `;

    await db.query(sql,[
        players.game_id,
        players.first_name,
        players.last_name,
        players.date,
        players.score
   ])


}
// async function getplayers2(players,db){
//     const sql2 = `
//   INSERT INTO game(
//     title
       
//         ) VALUES ($1)
//     `;

//     await db.query(sql2,[
//         players.title
      
//     ])

// }





module.exports = router;
