//DB 스키마의 기능(CRUD)
const Task = require("../model/Task");

const taskController = {};
//FrontEnd에서 오는 request = Header + body
//Header : 인증정보, 문서 형식정보 등
//Body : Front에서 보내는 값들

//request Body에서 읽어오는 것
taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    res.status(200).json({ status: "ok", data: newTask });
    //성공했을때 200을 보냄, json : 보내주는 것
    //새로운 데이터 newTask 는 data 필드 안에 있다.
  } catch (err) {
    //에러 발생시 핸들러
    res.status(400).json({ status: "fail", error: err });
  }
  //http status code
  //The Movie DataBase 참고(TMDB API) - 응답마다 다르게 결과값을 출력해줌
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).select("-__v");
    //리스트를 모두 받는데 찾은 것 중 가져올 정보를 선택하겠다.
    res.status(200).json({ status: "ok", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.updateTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        throw new Error("App can not find the task");
      }
      const fields = Object.keys(req.body);
      fields.map((item) => (task[item] = req.body[item]));
      await task.save();
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ status: "fail", error });
    }
  };

  taskController.deleteTask = async (req, res) => {
    try {
      const deleteItem = await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({ status: "success", data: deleteItem });
    } catch (error) {
      res.status(400).json({ status: "fail", error });
    }
  };

  //포스트맨 이용 - post로 보낼때 꼭 바디를 보내야함
  //req.body의 task, iscomplete를 raw JSON타입으로보냄
module.exports = taskController;
