const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a87d6a5eb6eca4120f973dd')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=> {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   name: 'Rahane'
  // }, {
  //   $set: {
  //     name: 'Venugopal'
  //   },
  //   $inc: {
  //     age: 1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a88da7f4d43d08e149ab345')
  }, {
    $rename: {
      location: 'loc'
    }
  }, {
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  });

  //db.close();
});
