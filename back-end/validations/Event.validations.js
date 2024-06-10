const Joi =require('joi');
 Joi.objectId=require('joi-objectid')(Joi);

const EventSchemaValidation=Joi.object({
    id:Joi.objectId(),
    title:Joi.string().required(),
    video:Joi.string().uri().required(),
    img:Joi.string().required(),
    desc:Joi.string().required(),
})

module.exports=EventSchemaValidation
