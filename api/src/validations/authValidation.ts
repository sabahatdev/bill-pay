import Joi from 'joi';

interface LoginRequest {
  username: string;
  password: string;
}

export const loginValidation = (data: LoginRequest) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(255).required()
  });

  return schema.validate(data);
};
