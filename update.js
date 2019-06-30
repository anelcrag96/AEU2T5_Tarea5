var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/tarea5',{
    useNewUrlParser: true
});

var User=mongoose.model('User',schema,'users');

User.update({_id:'5d1911040e28492d14942aea'},{$set:{email:'changed@ittepic.edu.mx'}},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }//if
    console.log("Actualización");
    console.log(docs);
    process.exit(0);
});