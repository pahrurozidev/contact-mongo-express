const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Pahrurozi:pahrurozi123@cluster0.kzufo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// ! menambah satu dataq

// const contact1 = new contact({
//     nama: 'Pahrurozi',
//     nohp: '085338043144',
//     email: 'pahrurozi17@gmail.com'
// });

// const save = contact1.save().then(contact => {
//     console.log(contact);
// });  