const db = require("../models");

exports.loginWithGoogle = (req, res) => {
    console.log(req.body);
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