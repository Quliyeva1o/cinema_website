const Joi =require('joi');

const HallSchemaValidation=Joi.object({
    name:Joi.string().required(),
    location:Joi.string().required(),
    img:Joi.string(),
    address:Joi.string().required(),
    parking:Joi.string().required(),
    map:Joi.string().uri().required(),
    phone:Joi.number().required(),
    events:Joi.array().default([]),
    tags:Joi.array().default([])
})

module.exports=HallSchemaValidation
