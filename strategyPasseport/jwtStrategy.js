const passport = require('passport');
const User = require('../user/user.model');

const { Strategy, ExtractJwt } = require('passport-jwt');
require('dotenv').config({ path: '../.env' });

passport.use(new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        function(token, res) {
            User.findOne({_id: token.sub}, function(error, user) {
                if (error)  return res(error, false);
                if (user)   return res(null, user._id);
                return res(null, false);
            });
        }
    )
);
module.exports = passport;