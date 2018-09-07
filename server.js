'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const StudentController =  require('./src/controllers/student');
const MongoDBUrl = 'mongodb://admin:rise123@ds020208.mlab.com:20208/rise-dev';

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/students',
  handler: StudentController.list
});

server.route({
  method: 'GET',
  path: '/students/{id}',
  handler: StudentController.get
});
server.route({
  method: 'POST',
  path: '/students',
  handler: StudentController.create
});

server.route({
  method: 'PUT',
  path: '/students/{id}',
  handler: StudentController.update
});

server.route({
  method: 'DELETE',
  path: '/students/{id}',
  handler: StudentController.remove
});

(async () => {
  try {  
    await server.start();
    // Once started, connect to Mongo through Mongoose
    mongoose.connect(MongoDBUrl, {}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {  
    console.log(err)
  }
})();