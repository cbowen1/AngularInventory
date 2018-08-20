Startup commands
Mongod to start DB
server- node app.js
client- npm start
http://localhost:4200

Mongo Commands
mongo --opens mongo shell
show collections --shows different collections
use invDB --switch to invDB

db.user.insert({name: 'cale bowen',username: 'cale',password: '123'})
db.createCollection('post')
db.post.insert(
    { title : 'TutsPlus Python Entry',
      description : 'Welcome to official entry of TutsPlus Python programming session'
    }
)
db.post.insert(
    { title : 'Could this be types of stuff',
      description : 'A short explanation, or maybe a count of stuff...who knows'
    }
)


we are on : Creating the delete blog post api