var mongoose=require('mongoose');
// var dbURI="mongodb://localhost/mekanbul";
var dbURI="mongodb+srv://selin294284:selinkarpuzcu@cluster0.gub7s.mongodb.net/mekanbul";
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı")
});
mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı koptu")
});

process.on("SIGNINT",function(){
    mongoose.connection.close();
    console.log("Bağlantı kesildi");
    process.exit(0);
});

require('./venue');