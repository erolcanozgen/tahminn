const passport = require('passport')
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth')
const { Strategy: TwitterStrategy } = require('passport-twitter')
const db = require("../app/models");
const {
    TWITTER_CONFIG, GOOGLE_CONFIG
} = require('../config')

module.exports = () => {

    // Allowing passport to serialize and deserialize users into sessions
    passport.serializeUser((user, cb) => {
        let _isFirstLogin = true;
        switch (user.provider) {
            case 'google':
                db.google_account.findByPk(user.id, {
                    include: [
                        {
                            model: db.user,
                        }
                    ],
                }).then((account) => {
                    if (account) {
                        _isFirstLogin = false;
                        _name = account.user.username;
                    }
                    else {
                        _name = user.displayName;
                    }
                    cb(null, { providerName: user.provider, id: account.user.id, name: _name, isFirstLogin: _isFirstLogin })
                });
                break;
            case 'twitter':
                db.twitter_account.findByPk(user.id, {
                    include: [
                        {
                            model: db.user,
                        }
                    ],
                }).then((account) => {
                    if (account) {
                        _isFirstLogin = false;
                        _name = account.user.username;
                    }
                    else {
                        _name = user.username;
                    }
                    cb(null, { providerName: user.provider, id: user.id, name: _name, isFirstLogin: _isFirstLogin })
                });
                break;

        }

    })
    passport.deserializeUser((obj, cb) => {
        cb(null, obj)
    })

    // The callback that is invoked when an OAuth provider sends back user 
    // information. Normally, you would save the user to the database 
    // in this callback and it would be customized for each provider
    const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile)

    // Adding each OAuth provider's strategy to passport
    passport.use(new GoogleStrategy(GOOGLE_CONFIG, callback))
    passport.use(new TwitterStrategy(TWITTER_CONFIG, callback))
}