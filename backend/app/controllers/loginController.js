const db = require("../models");

exports.addGoogleAccount = (req, res) => {
    const googleAccount = req.body.user;
    db.google_account.create({
        google_id: googleAccount.id,
        user: {
            username: googleAccount.name
        }
    }, {
        include: [{
            association: db.userGoogleAccounts,
        }]
    }).then(() => {
        req.session.passport.user.isFirstLogin = false;
        res.send(true)
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while creating the user account."
        });
    });
}

exports.addTwitterAccount = (req, res) => {
    const twitterAccount = req.body.user;
    db.twitter_account.create({
        twitter_id: twitterAccount.id,
        user: {
            username: twitterAccount.name
        }
    }, {
        include: [{
            association: db.userTwitterAccounts,
        }]
    }).then(() => {
        req.session.passport.user.isFirstLogin = false;
        res.send(true)
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while creating the user account."
        });
    });
}

exports.oauthCallbackForGoogle = (req, res) => {
    const io = req.app.get('io')

    db.google_account.findByPk(req.user.id, {
        include: [
            {
                model: db.user,
            }
        ],
    }).then(() => {
        io.in(req.session.socketId).emit('google')
        res.end()
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while getting the google account."
        });
    });
}

exports.oauthCallbackForTwitter = (req, res) => {
    const io = req.app.get('io')
    db.twitter_account.findByPk(req.user.id, {
        include: [
            {
                model: db.user,
            }
        ],
    }).then(() => {
        io.in(req.session.socketId).emit('twitter')
        res.end();
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while getting the twitter account."
        });
    });
}


exports.logout = (req, res) => {
    req.session.destroy();
    res.end()
}

exports.checkSession = (req, res) => {
    if (req.session.passport && req.session.passport.user) {
        let user = req.session.passport.user;
        res.send({
            id: user.id,
            isAuthenticated: true,
            isFirstLogin: user.isFirstLogin,
            name: user.name,
            providerName: user.providerName
        })
    }
    else
        res.send({ IsAuthenticated: false })
}