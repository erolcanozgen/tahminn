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
    }).then((account) => {
        if (account) {
            io.in(req.session.socketId).emit('google', account)
        }
        else {
            io.in(req.session.socketId).emit('google', { IsFirstLogin: true, name: req.user.displayName, id: req.user.id })
        }
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
    }).then((account) => {
        if (account) {
            io.in(req.session.socketId).emit('twitter', account)
        }
        else {
            io.in(req.session.socketId).emit('twitter', { IsFirstLogin: true, name: req.user.username, id: req.user.id })
        }
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
    if (req.session.passport && req.session.passport.user)
        res.send({ IsAuthenticated: true })
    else
        res.send({ IsAuthenticated: false })
}