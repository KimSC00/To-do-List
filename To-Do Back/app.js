const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//라우터와 연결해주기
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);
/*app은 /api라는 어떤 주소로 호출이 오면 
index로 갈 것이고 index로 가면 그 후 /tasks라는 주소로 
어떤 호출이오면 무조건 taskApi로 보낼 것이다.
그 후 뒤에 아무것도 없는데 그것이 post라면 
create task를 보여주고,
뒤에 :id가 있으면 delete인지 판단을 해서 출력한다.
/api : /api/tasks post처럼 앞에 붙는다.
=> api 주소를 사용한다는 점을 명확하게 할 수 있어서 좋다.
*/
//parser 세팅완료

const mongoURI = "mongodb://localhost:27017/todo-demo";
// mongodb에 todo-demo라는 저장소 생성
//DB connection fail MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
/* MongooseServerSelectionError: connect ECONNREFUSED라는 메시지가 나온다면
특정 IP 주소(::1:27017 및 127.0.0.1:27017)에서 MongoDB 서버에 연결할 수 없다는 것을 의미하기 때문에
mongodb://localhost:27017/todo-demo에서 localhost를 IP 주소로 바꿔서 실행해보기*/
//, { useNewUrlParser: true }
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(3000, () => {
  console.log("server on 3000");
});
// localhost 3000 번으로 오는 것은 다 여기로 온다
// 기본셋팅 끝. To-Do List앱.txt의 백엔드 준비 1번 끝
// To-Do List앱.txt의 백엔드 준비 2번 라우터 주소 정의 끝
// 웹 주소창에 http://localhost:5000/api/tasks를 입력한다면 get tasks가 출력됨
