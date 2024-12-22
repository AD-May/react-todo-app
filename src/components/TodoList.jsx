import { useState } from "react";
import { useEffect } from "react";
import TodoItem from "./TodoItem.jsx";
import { Fragment } from "react";

export default function TodoList() {

    const [itemName, setItemName] = useState("");

    /* Upon initial render, sets the todos state to the list in 
    localStorage if it exists, if not, the todos state is set to 
    an empty array */
    const [todos, setTodos] = useState(() => {
      const storedTodos = localStorage.getItem("storedTodos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    });
    
    useEffect(() => {
      localStorage.setItem("storedTodos", JSON.stringify(todos));
    }, [todos]);

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

        sortIds(newTodos);
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

    const sortIds = (unsortedArr) => {
      const newTodos = unsortedArr.map((todo, index) => {
        if (todo.id !== index) {
          return {
            ...todo,
            id: index
          };
        } else {
          return todo;
        };
      });

      setTodos(newTodos);
    }

    return (
      <>
        <h3 id="todo-header">Things Todo</h3>
        <ul id="todo-list">
          {todos.map((todo, index) => {
            return (
              <TodoItem
              key={index}
              todo={todo}
              onComplete={() => handleItemComplete(index)}
              onDelete={() => handleItemDelete(index)}
              onEdit={(name) => handleItemEdit(index, name)}
              date={new Date().toDateString()}
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