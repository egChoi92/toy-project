import { deleteTodoApi } from "api/todo";

export default function TodoDelete({id, setTodoList}) {
  const todoId = id;

  const handleDelete = async () => {
    await deleteTodoApi(todoId);

    setTodoList((prev) => {
      return prev.filter((todo) => todo.id!== todoId);
    })
  };

  return (
      <button type="button" className="todo-list__button todo-list__button--negative" data-testid="delete-button" onClick={handleDelete}>삭제</button>
  );
}
