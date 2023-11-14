import { Schema, Document, model } from "mongoose";

interface iTask {
  name: string,
  subject: string,
  age: number,
}

interface iTaskData extends iTask, Document {}

const taskModel = new Schema(
  {
    name: {
      type: String,
    },
    subject: {
        type: String,
    },
    age: {
        type: Number,
    }
  },
  { timestamps: true }
);

export default model<iTaskData>("Ekene", taskModel);
