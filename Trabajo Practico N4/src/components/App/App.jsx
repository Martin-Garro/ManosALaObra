// src/App.js
import React, { useState } from "react";
// Opcional si tienes estilos específicos
import Header from "../Header/Header.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import "../../style.scss";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const saveTask = (newTask) => {
    const taskId = Date.now();
    const newTaskItem = { id: taskId, tarea: newTask };
    setTaskList([newTaskItem, ...taskList]);
  };

  const handleDeleteTask = (taskId) => {
    setDeletedTasks([...deletedTasks, taskId]);
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="body">
      <h1 className="Titulo">Lista de tareas de martin</h1>
      <Header addTask={saveTask} />
      <TaskList tasks={taskList} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
