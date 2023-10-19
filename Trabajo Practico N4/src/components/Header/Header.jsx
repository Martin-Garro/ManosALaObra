// src/components/Header/Header.js
import React, { useState } from "react";
import "./Style.scss"; // Opcional si tienes estilos específicos
import { BsCheck } from "react-icons/bs";

function Header({ addTask }) {
  // Declaración de un estado local llamado 'newTask' y una función 'setNewTask' para manejarlo
  const [newTask, setNewTask] = useState("");

  // Función que actualiza el estado 'newTask' cuando se cambia el valor del input.
  const guardarPalabra = (e) => {
    setNewTask(e.target.value);
  };

  // Función para manejar el evento del botón para agregar una tarea.
  const handleSaveTask = () => {
    // Llama a la función 'addTask' pasada como una propiedad con el valor actual de 'newTask'.
    addTask(newTask);
    // Limpia el estado 'newTask' después de agregar la tarea.
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
        <BsCheck/>
      </button>
    </div>
  );
}

export default Header;