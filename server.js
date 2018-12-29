const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const mongoose = require('mongoose');
      mongoose.connect("mongodb://siliconpay:siliconpay123@ds127888.mlab.com:27888/siliconpay",  { useNewUrlParser: true });
const Users = require('./models/users')(mongoose);


//app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


io.on('connection', function(socket){
     console.log('a user connected');
})


// (async ()=>{
//   const users = new Users({
//         text: "dssdsdsds"
//   })
//   await users.save();
// })();


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port 3000`);;
});
