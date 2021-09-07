const mongoose=require('mongoose')

mongoose.connect('mongodb://mongo/midatabase',{
    userNewUrlParser: true,
    userUnifieldTopology: true
})
    .then(db=>console.log('Db is conected to',db.connection.host))
    .catch(err=>console.error(err));