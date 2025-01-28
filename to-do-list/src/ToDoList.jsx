import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["Wake Up early","Code for 4 hour","Go to gym"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask(t => [...t, newTask]);
    setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTask = task.filter((Element, i) => i !== index);
    setTask(updateTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTask = [...task];
      [updateTask[index],updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]];
      setTask(updateTask);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length-1) {
      const updateTask = [...task];
      [updateTask[index],updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
      setTask(updateTask);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To_do_List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
            {task.map((task,index) => 
                <li key={index}>
                  <span className="text">{task}</span>
                  <button className="delete-button"
                  onClick={() => deleteTask(index)}>delete</button>
                  <button className="move-button"
                  onClick={() => moveTaskUp(index)}>Task up</button>
                  <button className="move-button"
                  onClick={() => moveTaskDown(index)}>Task down</button>
                  
                </li>
            )}
        </ol>
      </div>
    </>
  );
}


export default ToDoList
