const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a87ee1722d2d03a2657aef3')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=> {
  //   console.log('Unable to fetch todos',err);
  // });
  //db.close();

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name:'Venugopal'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch users',err);
  })
});
