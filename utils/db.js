const mongoose = require('mongoose');

mongoose.connect('mongodb://Pahrurozi:pahrurozi123@cluster0-shard-00-00.kzufo.mongodb.net:27017,cluster0-shard-00-01.kzufo.mongodb.net:27017,cluster0-shard-00-02.kzufo.mongodb.net:27017/db?ssl=true&replicaSet=atlas-uq6wzi-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
    console.log('mongodb connected');
    })
    .catch((err) => {
    console.log(err);
})

// ! menambah satu dataq

// const contact1 = new contact({
//     nama: 'Pahrurozi',
//     nohp: '085338043144',
//     email: 'pahrurozi17@gmail.com'
// });

// const save = contact1.save().then(contact => {
//     console.log(contact);
// });  