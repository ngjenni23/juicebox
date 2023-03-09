const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
    const express = require('express');
    const apiRouter = express.Router();

    const usersRouter = require('./users');
    apiRouter.use('/users', usersRouter);

    const postsRouter = require('./posts');
    apiRouter.use('/posts', postsRouter);

    module.exports = apiRouter;
});