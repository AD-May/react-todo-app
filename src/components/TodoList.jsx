import { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import { Fragment } from "react";

export default function TodoList() {
    const [itemName, setItemName] = useState("");
    const [todos, setTodos] = useState([]);

    const handleItemAdd = event => {

      event.preventDefault();

      const newTodos = [
        ...todos,
        {
          id: todos.length,
          name: itemName,
          completed: false,
        },
      ];
     
      setTodos(newTodos);
    };

    const handleItemComplete = id => {

        const newTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            } else {
                return todo;
            }
        });

        setTodos(newTodos);
    }

    const handleItemDelete = id => {

        const newTodos = todos.filter((todo) => todo.id !== id);

        setTodos(newTodos);
    }

    const handleItemEdit = (id, name) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, name: name}
            } else {
              return todo;
            }
        });
        
        setTodos(newTodos);
    } 

    return (
      <>
        <h3 id="todo-header">Things Todo</h3>
        <ul id="todo-list">
          {todos.map((todo) => {
            return (
              <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={() => handleItemComplete(todo.id)}
              onDelete={() => handleItemDelete(todo.id)}
              onEdit={(name) => handleItemEdit(todo.id, name)}
            />
            );
          })}
        </ul>
        <form>
          <fieldset>
            <input id="input" type="text" placeholder="Type item here" 
              onChange={(e) => setItemName(e.target.value)}
            />
            <button
              id="submit"
              type="submit"
              className="btn btn-success"
              title="Add item to list"
              onClick={(e) => handleItemAdd(e)}
            >
              Add item
            </button>
          </fieldset>
        </form>
      </>
    );
}