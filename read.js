var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/tarea5',{
    useNewUrlParser: true
});

var User=mongoose.model('User',schema,'users');

User.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta general");
    console.log(docs);
});

User.find({email:'hericoes@ittepic.edu.mx'},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta con restricción");
    console.log(docs);  
});