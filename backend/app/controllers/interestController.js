const db = require("../models");

exports.getAllInterests = (req, res) => {

    db.interest.findAll({ include: [{ model: db.category }] }).then((interests) => {
        res.json(interests);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while getting the google account."
        });
    });
}

exports.addInterests = (req, res) => {
    if (req.session.passport && req.session.passport.user) {
        let user = req.session.passport.user;
        db.user.findByPk(user.id).then((user) => {
            user.setInterests(req.body.interests);
            res.end();
        });
    }
    else {
        res.status(500).send({
            message: "Unauthorized access !."
        });
    }
}
