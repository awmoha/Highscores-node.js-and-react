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
    res.render("admin/adminTable", {
        layout: 'admin/shared/layout',
        title: "Sök spel ",
        admin: result.rows

    });
});

module.exports = router;