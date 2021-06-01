const app = require('./app')
require('dotenv/config');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
})

  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB Connection Failed!"))

const port = process.env.PORT || 400;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
})