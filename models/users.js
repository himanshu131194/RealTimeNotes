module.exports = (mongoose)=>{
  const Users = new mongoose.Schema({
        text:  {
           type: String
        },
        shared_ids:[{
           type: String
        }],
        created: {
            type: Date,
            default: Date.now
        }
  });
  return mongoose.model('users', Users);
}
