import TodoDelete from "components/TodoDelete";
import TodoModify from "components/TodoModify";

export default function TodoItem({todo}) {
    console.log('props: ', todo);
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted}/>
        <span>{todo.todo}</span>
      </label>
      <TodoModify/>
      <TodoDelete/>
    </li>
  );
}
