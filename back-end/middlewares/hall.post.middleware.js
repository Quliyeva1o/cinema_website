const HallSchemaValidation = require("../validations/Hall.validations.js");

const hall_middleware = (req, res, next) => {
    const { error } = HallSchemaValidation.validate(req.body);
    if (!error) {
        next();
    }
    else {
        const { details } = error;
        res.send({
            message: details[0].message,
            error: true,
        });
    }
};

module.exports = hall_middleware;