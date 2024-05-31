import Joi from "joi";

export default Joi.object({
    firstname: Joi.string().min(3).max(50).required(),
    lastname:Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});






