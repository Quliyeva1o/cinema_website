const EventSchemaValidation = require("../validations/Event.validations.js");

const event_middleware = (req, res, next) => {
    const { error } = EventSchemaValidation.validate(req.body);
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

module.exports = event_middleware;