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

  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })
  // db.collection('Users').deleteMany({name: 'Venugopal'}).then((result)=> {
  //   console.log('Deleted users with name Venugopal');
  // })
  db.collection('Users')
    .findOneAndDelete({_id: new ObjectID('5a87d88c4638670fe00f1da4')})
    .then((result)=> {
      console.log('Deleted document with given Object ID');
    })
  //db.close();
});
