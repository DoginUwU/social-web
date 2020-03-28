const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const conn = require('./database/conn');
const UsersController = require('./controllers/usersController');
const PostsController = require('./controllers/PostsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//request, response
routes.get('/users', UsersController.index);
routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        first_name: Joi.string().required().min(3),
        last_name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        nickname: Joi.string().required().min(4),
        image: Joi.string().required().min(3),
        password: Joi.number().required().min(8)
    })    
}), UsersController.create);
routes.delete('/users/:id/:password', UsersController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.post('/posts', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(3),
        description: Joi.string().min(3),
        image: Joi.string().min(3),
        likes: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), PostsController.create);
routes.get('/posts', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), PostsController.index);
routes.delete('/posts/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), PostsController.delete);


routes.get('/', (req, res) => {
    return res.send("Hello, World!");
});

module.exports = routes;