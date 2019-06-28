var user1=new User({
    name: 'Henry Rico',
    email: 'hericoes@ittepic.edu.mx'
});

user1.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved User1");
});

var user2=new User({
    name: 'David Rivera',
    email: 'dariverara@ittepic.edu.mx'
});

User.create(user2,function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved User2");
});

User.create({name:'Lizeth Uribe', email: 'liguuribena@ittepic.edu.mx'},function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved "+name);
});