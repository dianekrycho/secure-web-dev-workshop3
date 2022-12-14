//https://levelup.gitconnected.com/everything-you-need-to-know-about-the-passport-local-passport-js-strategy-633bbab6195


const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../user/user.model');
const userService = require('../user/user.service');

passport.use(new LocalStrategy(
    function(username, password, cb) {
        User.findOne({ username }, async function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                console.log("User not found : status 404");
                return cb(null, 404);
            }

            if (!await userService.verify(username, password)) {
                console.log("Password not matching : status 403");
                return cb(null, 403);
            }
            return cb(null, user);
        });
    }
));

module.exports = passport