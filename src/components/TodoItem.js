import TodoDelete from "components/TodoDelete";
import TodoModify from "components/TodoModify";

export default function TodoItem({todo}) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={todo.isCompleted}/>
        <span>{todo.todo}</span>
      </label>
      <TodoModify/>
      <TodoDelete/>
    </li>
  );
}
