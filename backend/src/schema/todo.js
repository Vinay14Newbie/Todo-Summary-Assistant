import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      minLength: 1
    },
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
