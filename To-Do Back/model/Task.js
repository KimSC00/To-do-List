const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//스키마 = 작업지시서(ex이렇게 생겼을것이다.)

const taskSchema = Schema(
  {
    task: {
      //할일
      type: String,
      required: true,
      //필수값인지?
    },
    isComplete: {
      //완료 여부
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
  //몇시에 만들어진건지?
);

//모델 - 작업지시서를 기반으로 데이터베이스 모델을 만든다.
const Task = mongoose.model("Task", taskSchema);
//몽구스는 모델을 만들어준다. Task 모델명으로 taskSchema를 참고하여 만든다.

module.exports = Task;
