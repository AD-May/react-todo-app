import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TodoItem({ todo, onComplete, onDelete, onEdit}) {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);

  const handleSave = () => {
    onEdit(editedName);
    setEditing(false);
  }

  return (
    <li className="item-container">
      {editing ? (
        <input
          id="change-input"
          type="text"
          placeholder="Enter new item"
          className="reinput"
          onChange={(e) => setEditedName(e.target.value)}
        />
      ) : (
        <p style={{color: todo.completed ? "green" : "red" }} onClick={onComplete}>
          {todo.name}
        </p>
      )}
      <button
        id="complete-btn"
        className="btn btn-success"
        aria-label="Click to complete task"
        title={todo.completed ? "Reactivate item" : "Complete item"}
        onClick={onComplete}
        style={{fontSize: todo.completed ? 12 : 16}}
      >
        {todo.completed ? (
          "Set active"
        ) : (
          <FontAwesomeIcon icon={faCheck} aria-label="Checkmark icon" />
        )}
      </button>
      <button
        id="remove-btn"
        className="btn btn-danger"
        aria-label="Click to remove task"
        title="Remove item"
        onClick={onDelete}
      >
        <FontAwesomeIcon icon={faX} aria-label="X icon" />
      </button>
      {editing ? (
        <button
          id="save-btn"
          className="btn btn-primary"
          aria-label="Click to save item"
          title="Save name"
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <button
          id="edit-btn"
          className="btn btn-secondary"
          aria-label="Click to edit item"
          title="Edit name"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      )}
    </li>
  );
}
