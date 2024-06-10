const Joi =require('joi');
Joi.objectId=require('joi-objectid')(Joi)

const UserSchemaValidation=Joi.object({
    id:Joi.objectId(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    mobile:Joi.number().required(),
    birthDate:Joi.number().required(),
    postCode:Joi.number().required(),
    gender:Joi.string().required(),
    terms:Joi.bool().required(),
    tickets:Joi.array().default([])
})

module.exports=UserSchemaValidation
