import React, { useEffect, useReducer } from "react";
import "./App.css";
import Tarea from "./components/Tareas";


const reducer = (state, action) => {
  switch (action.type) {
    case "Agregar":
      return [...state, { name: action.payload, done: false }];
    case "Eliminar":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [tareas, dispatch] = useReducer(reducer, [
    { name: "Revisar material x", done: false },
    { name: "Revisar material y", done: false },
    { name: "Revisar material z", done: false },
  ]);

  const crearTarea = (nuevaTarea) => {
    dispatch({ type: "Agregar", payload: nuevaTarea });
  };

  const eliminarTarea = (index) => {
    dispatch({ type: "Eliminar", payload: index });
  };

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div className="App">
      <Tarea crearTarea={crearTarea} />
      <div className="Tareas_container">
        {tareas.map((tarea, index) => (
          <li key={index}>
            <span>{tarea.name}</span>{" "}
            <a
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => eliminarTarea(index)}
            >
              Eliminar Tarea
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
