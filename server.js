const express = require('express');
const app = express();

const mongoose = require('mongoose');
      mongoose.connect("mongodb://siliconpay:siliconpay123@ds127888.mlab.com:27888/siliconpay",  { useNewUrlParser: true });
const Users = require('./models/users')(mongoose);


app.use(express.static(__dirname+'/public'));


(async ()=>{
  const users = new Users({
        text: "dssdsdsds"
  })
  await users.save();
})();



app.listen(4001, ()=>{
    console.log(`server is running on port 4001`);;
});
