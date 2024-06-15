const Joi =require('joi');
Joi.objectId=require('joi-objectid')(Joi)

const HallSchemaValidation=Joi.object({
    id:Joi.objectId(),
    name:Joi.string().required(),
    location:Joi.string().required(),
    img:Joi.string().required(),
    adress:Joi.string().required(),
    map:Joi.string().uri().required(),
    events:Joi.array().default([]),
    tags:Joi.array().default([])
})

module.exports=HallSchemaValidation
