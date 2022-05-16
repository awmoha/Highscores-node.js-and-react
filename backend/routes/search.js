var express = require("express");
var router = express.Router();

/* GET search page. */
router.get("/", async function(req, res) {
    const searchTerm = req.query.q;
    const db = req.app.locals.db;

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
    const result = await db.query(sql, [searchTerm])

    res.render("search/search", {
        title: "Sökresultat",
        games: result.rows,
        searchTerm

    });
});

module.exports = router;