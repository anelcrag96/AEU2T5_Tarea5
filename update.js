User.update({_id:''},{$set:{email:'changed@ittepic.edu.mx'}},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
    process.exit(0);
});