const MovieSchemaValidation = require("../validations/Movie.validations.js");

const movie_middleware = (req, res, next) => {
    const { error } = MovieSchemaValidation.validate(req.body);
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

module.exports = movie_middleware;