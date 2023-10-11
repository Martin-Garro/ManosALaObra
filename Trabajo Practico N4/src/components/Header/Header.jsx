// src/components/Header/Header.js
import React, { useState } from "react";
//import "./Header.css"; // Opcional si tienes estilos específicos
import { BsCheck } from "react-icons/bs";

function Header({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const guardarPalabra = (e) => {
    setNewTask(e.target.value);
  };

  const handleSaveTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="addTask">
      <input
        className="addTaskInput"
        placeholder=""
        type="text"
        value={newTask}
        onChange={guardarPalabra}
      />
      <button className="addTaskButton" onClick={handleSaveTask}>
        <i className="check"><BsCheck/></i>
      </button>
    </div>
  );
}

export default Header;