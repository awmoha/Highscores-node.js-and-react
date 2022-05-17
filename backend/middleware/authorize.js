const jwt = require('jsonwebtoken')

function authorize(req, res, next) {

    // kontrollera om användaren har en giltig token
  
    // 1. hämta ut värde för header "Authorization"
    const authorizationHeader = req.headers['authorization'];
  
    // 'Bearer asdfasldfj203r2radf' > ['Bearer','asdfasldfj203r2radf']
    // ?. = optional chaining - anropa enbart split om authorizationHeader
    // inte är undefined eller null
    const token = authorizationHeader?.split(' ')[1];
  
    if (!token) {
      res.status(401).send();
      return;
    }
  
    // Verifiera att token är giltig, dvs. att den är skapad av "oss"
    jwt.verify(token, 'GREEN', async function(err) {
  
      if (err) {
        res.status(401).send();
        return;
      }
  
      next();
    });
  }



module.exports = authorize