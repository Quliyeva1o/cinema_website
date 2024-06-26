const Joi =require('joi');
Joi.objectId=require('joi-objectid')(Joi)

const MovieSchemaValidation=Joi.object({
    name:Joi.string().required(),
    director:Joi.string().required(),
    bgImg:Joi.string().uri().required(),
    cast:Joi.string().required(),
    genre:Joi.array(),
    rating:Joi.string().required(),
    description:Joi.string().required(),
    runTime:Joi.number().required(),
    releaseDate:Joi.string().required(),
    trailers:Joi.array().default([]),
    coverImg:Joi.string().uri().required(),
    ageRes:Joi.number().required(),
    sessionTimes:Joi.array().default([])
})

module.exports=MovieSchemaValidation
