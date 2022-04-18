const express = require('express');
const router = express.Router();
const hoki_controller = require('./controller/hoki');
const user_controller = require("./controller/user")
//import
/* GET home page. */
function middleware(req, res, next) {
    // document.cookie = "username=John Doe";
    // authentication middleware
    // parse username and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')
    // Verify username and password are set and correct
    //todo: here get user based on username, and if everything matches good to go
    user_controller.get_user(username).exec(function (err, user) {
        if (username && password && username === user.username && password === user.password) {
            // Access granted...
            return next()
        }
        // Access denied...
        //res.set('WWW-Authenticate', 'Basic realm="401"')
        //res.status(401).send('Authentication required.') // custom message
        return next()
    })
}
router.get('/', middleware, function (req, res, next) {
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO ANGULAR' });
});

// routing

router.post('/hoki', middleware, hoki_controller.hoki_get_all);                // get all
router.get('/hoki/:id', middleware, hoki_controller.hoki_details);             // get by id
router.post('/hoki/add', middleware, hoki_controller.hoki_create);             // add
router.put('/hoki/:id', middleware, hoki_controller.hoki_update);              // update by id
router.post('/hoki/delete/:id', middleware, hoki_controller.hoki_delete);     // delete by id 

module.exports = router;