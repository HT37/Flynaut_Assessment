import { Router } from "express";
import { Todo } from "../database/models/Todo.js";
import { auth } from "../middlewares/auth.js";

const todoRouter = Router();

todoRouter.post("/createtodo", auth, async (req, res) => {
  const body = req.body;
  const user = res.locals.user;

  if (!body.title) {
    res.status(400).send({
      message: "Todo title is required",
    });
    return;
  }

  const todo = new Todo();
  todo.title = body.title;
  todo.description = body.description ? body.description : "";
  todo.user = user._id;
  todo.isCompleted = false;

  await todo.save();
  res.status(201).send(todo);
});



  todoRouter.get("/all", auth, async (req, res) => {
    try {
    const user = res.locals.user;
    const todos = await Todo.find({ user: user._id });
    res.status(200).send(todos);
    } catch(error ){
      console.log(error);
    }
  });


todoRouter.get("/:id", auth, async (req, res) => {
  const todoId = req.params.id;
  const user = res.locals.user;

  const todo = await Todo.findOne({
    _id: todoId,
    user: user._id,
  });

  if (!todo) {
    res.status(404).send({
      message: "Todo not found",
    });
    return;
  }
  res.status(200).send(todo);
});

todoRouter.delete("/:id", auth, async (req, res) => {
  const todoId = req.params.id;
  const user = res.locals.user;

  const todo = await Todo.findOneAndRemove({
    _id: todoId,
    user: user._id,
  });

  if (!todo) {
    res.status(404).send({
      message: "Todo not found",
    });
    return;
  }
  res.status(200).send(todo);
});
export default todoRouter;
