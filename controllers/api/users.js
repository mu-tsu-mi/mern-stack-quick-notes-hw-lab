const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
}

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        
        // token will be a string
        const token = createJWT(user);
        
        // we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token)
    } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        // findOne is the appropriate query method to use to find a user based on their email
        const user = await User.findOne({email: req.body.email}).exec();
        // console.log(req.body.email)
        if(!user) {
            throw new Error();
        }
// https://www.npmjs.com/package/bcrypt#with-promises
        const match = await bcrypt.compare(req.body.password, user.password)
        if(match) {
        // token will be a string
        const token = createJWT(user);
        
        // we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token)
        } else {
            throw new Error("Password does not match. Please try again")
        }
    } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
        res.status(400).json(err);
    }
}

function checkToken(req, res) {
// req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

/*-- Helper Functions --*/
function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }
