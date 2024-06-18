const user_router=require("./user.route");
const movie_router=require("./movie.route");
const event_router=require("./event.route");
const hall_router=require("./hall.route");
const tag_router=require("./tag.route");

const router={
    user:user_router,
    movie:movie_router,
    event:event_router,
    hall:hall_router,
    tags:tag_router
}

module.exports=router;