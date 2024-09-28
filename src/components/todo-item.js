import { MdDelete } from "react-icons/md";
import "./todo-item.css";
function TodoItem({ value, index, deletedTodo, complitedTodo }) {
  return (
    <div className="item_box">
      <div
        className="todo_item"
        style={{
          textDecoration: value.isComplite ? "line-through" : "",
          backgroundColor: value.isComplite ? "grey" : "",
        }}
      >
        {value.text}
        <div>
          <button onClick={() => complitedTodo(index)}>
            <input type="checkbox" />
          </button>
          <button onClick={() => deletedTodo(index)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
