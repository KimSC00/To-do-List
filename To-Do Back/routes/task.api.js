//index.js에서 post,get, ...의 /tasks 하나로 합치기

const express = require("express");
const taskController = require("../Controller/task.controller");
const router = express.Router();

router.post("/", taskController.createTask);
//할일 추가

router.get("/", taskController.getTask);
//respond로 무엇을 보낼 것이냐
//할일 리스트보기

router.put("/:id", taskController.updateTask);
//할일 끝남, 안끝남 기능

router.delete("/:id", taskController.deleteTask);
//할일 삭제

module.exports = router;
//이 라우터기능들을 라우터로 내보내서 사용할 것이다.
//라우터 정의 끝
