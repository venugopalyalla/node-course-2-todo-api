const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert to table',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  //
  db.collection('UsersDup').insertOne({
    _id: 123,
    name: 'Venugopal',
    age: 24,
    location: 'Tempe'
  }, (err,result) => {
    if(err) {
      return console.log('Unable to insert into table',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.close();
});
