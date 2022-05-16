var express = require("express");
var router = express.Router();

/* GET search page. */
router.get("/", async function(req, res) {
    const db = req.app.locals.db;
    const sql = `
SELECT id,
title ,
description , 
genre ,
lanseringsår,
image_url ,
slug 
FROM game
`;
    const result = await db.query(sql)

    res.render("admin/admin", {
        title: "Sök spel ",
        admin: result.rows

    });
});

module.exports = router;