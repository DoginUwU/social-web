const express = require('express');
const conn = require('./database/conn');
const UsersController = require('./controllers/usersController');
const PostsController = require('./controllers/PostsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//request, response
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/profile', ProfileController.index);

routes.post('/posts', PostsController.create);
routes.get('/posts', PostsController.index);
routes.delete('/posts/:id', PostsController.delete);


routes.get('/', (req, res) => {
    return res.send("Hello, World!");
});

module.exports = routes;