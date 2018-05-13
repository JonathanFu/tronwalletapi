'use strict';
const express = require('express');
const app = require('./app');


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use( (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
});

const http = require('http');
const port = '3001';

app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log(`Server is listen on ${port}`);