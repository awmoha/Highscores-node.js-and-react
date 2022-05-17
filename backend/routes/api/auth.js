var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken')
// POST /api/auth
router.post("/", async function (req, res, next ) {

const {
username,
password

} = req.body;

const db = req.app.locals.db;
const user = await findUser(username,password, db);

if(!user) {
    res.status(401).send(); //401 Unauthorized
    return;
}

const token = generateToken();


  res.json({token});
});

function generateToken () {
    
const token = jwt.sign({}, 'GREEN');
    return token;
}


async function findUser(username,password,db) {
    
    const sql = `
    SELECT  id,
            username,
            email,
            first_name,
            last_name
     FROM "user"
        WHERE username = $1
        AND   password = $2
    `;

    const result = await db.query(sql,[username,password])

    //Ett alternativ och tydlig 
    // let user = result.rows.length 
    // ? result.rows[0] 
    // : undefined;

    //Ett annat alternativ 
    let user;
    if(result.rows.length) {
       user =result.rows[0];
    }

    return user;

}


module.exports = router; 