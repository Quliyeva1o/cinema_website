const Joi =require('joi');
Joi.objectId=require('joi-objectid')(Joi)

const MovieSchemaValidation=Joi.object({
    id:Joi.objectId(),
    name:Joi.string().required(),
    director:Joi.string().required(),
    cast:Joi.string().required(),
    genre:Joi.string().required(),
    rating:Joi.number().required(),
    description:Joi.string().required(),
    runTime:Joi.number().required(),
    releaseDate:Joi.number().required(),
    trailer:Joi.string().uri().required(),
    ageRes:Joi.number().required(),
    sessionTimes:Joi.array().default([])
})

module.exports=MovieSchemaValidation
