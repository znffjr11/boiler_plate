const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require("./config/key");

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then( () => console.log('mongoDB connected...'))
  .catch(err => console.log(err))





app.get('/', (req, res) => {  res.send('Hello World!')
})

app.post('/regiser',(req, res) => { 

    //회원 가입 할떄 필요한 정보를 client에서 가져오면 그것을 데베로 넣어준다


    const user = new User(req.body)

    user.save((err, doc) => {
      if(err) return res.json({ success: false ,err })
      return res.status(200).json({
        success: true
        })
    })
})


app.listen(port, () => 
  console.log(`Example app listening at http://localhost:${port}`)
)