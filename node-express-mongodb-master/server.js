const express = require("express");




//DB URI이 연결되었는지 확인해줌
const config = require('./app/config/key');
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


  
//react을 빌드 해준 파일에 하나의 주소로 연결해줌
const path = __dirname + '/app/views/';
const app = express();
app.use(express.static(path));


//cors 에러 방지 모듈 코드
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));




//bodyParser 모듈 실행 코드
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/*const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });*/




// 클라이언트인 react을 토대로 초기화면 /으로 설정해주어 활성화 해줌.
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});


//모듈화 되어 분리된 곳을 위해 express의 프로그램 변수 app을 보내줌
// CRUD을 제어하기 위한 모듈화된 코드들을 가져옴
require("./app/routes/turorial.routes")(app);



// 포트 설정
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
