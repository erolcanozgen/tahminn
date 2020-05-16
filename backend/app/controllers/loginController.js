const db = require("../models");

exports.loginWithGoogle = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    db.google_account.findByPk(req.body.id, {
        include: [
            {
                model: db.user,
            }
        ],
    }).then((account) => {
        res.send(account)
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while getting the google account."
        });
    });
};

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

exports.loginWithTwitter = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    db.twitter_account.findByPk(req.body.id, {
        include: [
            {
                model: db.user,
            }
        ],
    }).then((account) => {
        res.send(account)
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while getting the twitter account."
        });
    });
};

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
    const user = {
        name: req.user.displayName,
        id: req.user.id
    }
    io.in(req.session.socketId).emit('google', user)
    res.end()
}

exports.oauthCallbackForTwitter = (req, res) => {
    const io = req.app.get('io')
    const user = {
        name: req.user.username,
        id: req.user.id
    }
    io.in(req.session.socketId).emit('twitter', user)
    res.end()
}