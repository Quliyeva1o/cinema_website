const Joi =require('joi');
Joi.objectId=require('joi-objectid')(Joi)

const MovieSchemaValidation=Joi.object({
    name:Joi.string().required(),
    director:Joi.string().required(),
    bgImg:Joi.string().uri().required(),
    cast:Joi.string().required(),
    genre:Joi.string().required(),
    rating:Joi.string().required(),
    description:Joi.string().required(),
    runTime:Joi.number().required(),
    releaseDate:Joi.string().required(),
    trailers:Joi.array().default([]),
    coverImg:Joi.string().uri().required(),
    ageRes:Joi.number().required(),
    halls:Joi.array().default([]),
    sessionTimes:Joi.array().default([])
})

module.exports=MovieSchemaValidation
