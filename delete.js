User.findByIdAndRemove({_id:''},function (error,docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});