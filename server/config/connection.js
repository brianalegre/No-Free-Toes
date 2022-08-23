const mongoose = require('mongoose');

// UNCOMMENT OUT TO CONNECT TO MONGODB ATLAS
// LEAVE COMMENTED TO CONNECT LOCALLY
// NPM RUN SEED
// COMMAND IS USED TO SEED LOCALLY OR MONGODB, DEPENDS ON
// WHAT IS COMMENTED OUT.
require('dotenv').config()

// console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/noFreeToes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
