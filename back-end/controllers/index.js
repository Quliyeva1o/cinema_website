const movie_controller = require("./movie.controller.js");
const event_controller = require("./event.controller.js");
const user_controller = require("./user.controller.js");
const hall_controller = require("./hall.controller.js");
const tag_controller = require("./tag.controller.js");
const time_controller = require("./time.controller.js");

const controller = {
    user: user_controller,
    movie: movie_controller,
    event: event_controller,
    hall: hall_controller,
    tag: tag_controller,
    time: time_controller
}

module.exports = controller;