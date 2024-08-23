//express에서 제공하는 route사용
const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");
//task.api.js 가져오기

router.use("/tasks", taskApi);
//tasks라는 주소가 불리면 무조건 taskApi로 넘어갈 것이다.
//예시 : router.use('/users, userApi)
//-> /users라는 주소가 불리면 userApi로 넘어갈 것이다.

module.exports = router;
//이 라우터기능들을 라우터로 내보내서 사용할 것이다.
