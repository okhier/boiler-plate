const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://junyoung:4613d56@boiler-plate-shard-00-00.rqk8l.mongodb.net:27017,boiler-plate-shard-00-01.rqk8l.mongodb.net:27017,boiler-plate-shard-00-02.rqk8l.mongodb.net:27017/boiler-plate?ssl=true&replicaSet=atlas-85mghk-shard-0&authSource=admin&retryWrites=true&w=majority', {
      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDb. Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})