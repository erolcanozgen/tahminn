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
